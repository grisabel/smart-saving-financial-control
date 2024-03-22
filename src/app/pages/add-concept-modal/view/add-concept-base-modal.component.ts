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
      text: 'Cancelar',
    },
    {
      text: 'Atrás',
    },
    {
      text: 'Atrás',
    },
    {
      text: 'Atrás',
    },
  ];

  confirmBtns: ModalBaseBtn[] = [
    {
      text: 'Siguiente',
    },
    {
      text: 'Siguiente',
      isDisable: true,
    },
    {
      text: 'Siguiente',
      isDisable: true,
    },
    {
      text: 'Añadir',
    },
  ];

  constructor(private addConceptStoreService: AddConceptStoreService) {}

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
    if (changes['titleOpen']) {
      if (this.titleOpen === 'openIncome') {
        this.addConceptStoreService.conceptType.set('income');
      } else {
        this.addConceptStoreService.conceptType.set('expense');
      }

      this.title =
        this.titleOpen === 'openIncome'
          ? 'Registra tus ingresos'
          : 'Registra tus gastos';

      this.descriptions =
        this.titleOpen === 'openIncome'
          ? [
              'Añade tus ingresos antes de que se te olvide',
              'Añade tus ingresos antes de que se te olvide',
              'Añade tus ingresos antes de que se te olvide',
              'Añade tus ingresos antes de que se te olvide',
            ]
          : [
              'Añade tus gastos antes de que se te olvide',
              'Añade tus gastos antes de que se te olvide',
              'Añade tus gastos antes de que se te olvide',
              'Añade tus gastos antes de que se te olvide',
            ];
    }
  }

  onConfirmHandler() {
    //todo
    // this.addConceptStoreService.conceptType.set(null);

    // this.addConceptStoreService.amount.set(null);
    // this.addConceptStoreService.conceptId.set(null);
    // this.addConceptStoreService.date.set(null);
    // this.addConceptStoreService.note.set(null);
    this.onConfirm.emit();

    this.cleanState();
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
