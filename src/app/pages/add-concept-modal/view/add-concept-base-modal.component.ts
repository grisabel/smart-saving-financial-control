import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Signal,
  SimpleChanges,
  WritableSignal,
} from '@angular/core';
import {
  ModalBaseBtn,
  ModalBaseOutputs,
} from '@stories/atoms/modals/modal-base/modal-base.component.types';
import { AddConceptStoreService } from './store/add-concept-store.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { combineLatest, forkJoin } from 'rxjs';
import { FinancialControlInterfaceService } from '../data/repository/financial-control/financial-control-interface.service';
import { LoadingService } from '@app/services/Loading/loading.service';

@Component({
  selector: 'app-add-concept-base-modal',
  templateUrl: './add-concept-base-modal.component.html',
  styleUrls: ['./add-concept-base-modal.component.scss'],
})
export class AddConceptBaseModalComponent implements OnChanges, OnInit {
  @Input() open!: WritableSignal<boolean>;
  @Input() titleOpen: string = '';
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onConfirm: ModalBaseOutputs['onConfirm'] = new EventEmitter<void>();
  @Output() onCancel: ModalBaseOutputs['onCancel'] = new EventEmitter<void>();

  title: string = '';
  descriptions: string[] = [''];

  cancelBtns: ModalBaseBtn[] = [
    {
      text: 'btn-cancel',
    },
    {
      text: 'btn-back',
    },
    {
      text: 'btn-back',
    },
    {
      text: 'btn-back',
    },
  ];
  confirmBtns: ModalBaseBtn[] = [
    {
      text: 'btn-next',
    },
    {
      text: 'btn-next',
      isDisable: true,
    },
    {
      text: 'btn-next',
      isDisable: true,
    },
    {
      text: 'btn-add',
    },
  ];

  constructor(
    private addConceptStoreService: AddConceptStoreService,
    private financialControlService: FinancialControlInterfaceService,
    public loadingService: LoadingService
  ) {}

  conceptId$ = toObservable(this.addConceptStoreService.conceptId);

  conpectData$ = combineLatest({
    amount: toObservable(this.addConceptStoreService.amount),
    date: toObservable(this.addConceptStoreService.date),
    note: toObservable(this.addConceptStoreService.note),
  });

  ngOnInit(): void {
    this.conceptId$.subscribe((conceptId) => {
      this.confirmBtns = this.confirmBtns.map((confirmBtn, i) => {
        if (i === 1) {
          return {
            ...confirmBtn,
            isDisable: !conceptId,
          };
        }
        return confirmBtn;
      });
    });

    this.conpectData$.subscribe(({ amount, date, note }) => {
      this.confirmBtns = this.confirmBtns.map((confirmBtn, i) => {
        if (i === 2) {
          return {
            ...confirmBtn,
            isDisable: !amount || !date || !note,
          };
        }
        return confirmBtn;
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['titleOpen'] && changes['titleOpen'].currentValue) {
      let _titleOpen = changes['titleOpen'].currentValue;
      if (_titleOpen === 'openIncome') {
        this.addConceptStoreService.conceptType.set('income');
      } else {
        this.addConceptStoreService.conceptType.set('expense');
      }

      this.title =
        this.titleOpen === 'openIncome'
          ? 'register-income-title'
          : 'register-expense-title';

      this.descriptions =
        this.titleOpen === 'openIncome'
          ? [
              'register-income-subtitle',
              'register-income-subtitle',
              'register-income-subtitle',
              'register-income-subtitle',
            ]
          : [
              'register-expense-subtitle',
              'register-expense-subtitle',
              'register-expense-subtitle',
              'register-expense-subtitle',
            ];
    }
  }

  onConfirmHandler() {
    const conceptId = this.addConceptStoreService.conceptId();
    const amount = this.addConceptStoreService.amount();
    const date = this.addConceptStoreService.date();
    const note = this.addConceptStoreService.note();

    if (!amount || !conceptId || !date || !note) {
      return;
    }

    const addConcept =
      this.titleOpen === 'openIncome' ? 'addIncome' : 'addExpense';

    this.open.set(false);
    this.loadingService.show();
    this.financialControlService[addConcept]({
      amount,
      conceptId,
      date,
      note,
    })
      .then((resul) => {
        console.log(resul);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.loadingService.hide();
        this.onConfirm.emit();
        this.cleanState();
      });
  }

  onCancelHandler() {
    this.onCancel.emit();
    this.open.set(false);

    this.cleanState();
  }

  onCloseHandler() {
    this.onClose.emit();

    this.cleanState();
  }

  private cleanState() {
    this.addConceptStoreService.conceptType.set(null);

    this.addConceptStoreService.amount.set(null);
    this.addConceptStoreService.conceptId.set(null);
    this.addConceptStoreService.date.set(null);
    this.addConceptStoreService.note.set(null);
  }
}
