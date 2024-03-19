import { Component } from '@angular/core';

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
}
