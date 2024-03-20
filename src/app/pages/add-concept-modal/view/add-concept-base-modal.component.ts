import {
  Component,
  EventEmitter,
  Input,
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

@Component({
  selector: 'app-add-concept-base-modal',
  templateUrl: './add-concept-base-modal.component.html',
  styleUrls: ['./add-concept-base-modal.component.scss'],
})
export class AddConceptBaseModalComponent {
  @Input() open!: WritableSignal<boolean>;
  @Input() titleOpen: string = '';
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onConfirm: ModalBaseOutputs['onConfirm'] = new EventEmitter<void>();
  @Output() onCancel: ModalBaseOutputs['onCancel'] = new EventEmitter<void>();

  title: string = '';
  descriptions: string[] = [''];

  constructor(private addConceptStoreService: AddConceptStoreService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['titleOpen']) {
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
    },
    {
      text: 'Siguiente',
    },
    {
      text: 'Añadir',
    },
  ];

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
