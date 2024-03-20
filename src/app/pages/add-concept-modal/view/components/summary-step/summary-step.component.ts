import { Component } from '@angular/core';
import { AddConceptStoreService } from '../../store/add-concept-store.service';

@Component({
  selector: 'app-summary-step',
  templateUrl: './summary-step.component.html',
  styleUrls: ['./summary-step.component.scss'],
})
export class SummaryStepComponent {
  inputNumberLabel = 'Importe';
  inputDateLabel = 'Fecha';
  inputCommentLabel = 'Comentario';
  labelAccount = 'Cuenta';
  placeholderAccount = 'Cuenta Principal';
  readOnly = true;
  disabled = true;

  valueDate = this.addConceptStoreService.date() ?? '';
  valueComment = this.addConceptStoreService.note() ?? '';
  valueAmount = this.addConceptStoreService.amount() ?? 0;
  categorySelected = 'add';

  constructor(private addConceptStoreService: AddConceptStoreService) {}
}
