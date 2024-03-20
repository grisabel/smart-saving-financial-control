import { Component } from '@angular/core';
import { AddConceptStoreService } from '../../store/add-concept-store.service';

@Component({
  selector: 'app-concept-step',
  templateUrl: './concept-step.component.html',
  styleUrls: ['./concept-step.component.scss'],
})
export class ConceptStepComponent {
  inputNumberLabel = 'Importe';
  inputDateLabel = 'Fecha';
  inputCommentLabel = 'Comentario';

  constructor(private addConceptStoreService: AddConceptStoreService) {}

  valueDate = this.addConceptStoreService.date() ?? '';
  handleValueDate(value: string) {
    this.addConceptStoreService.date.set(value);
  }

  valueComment = this.addConceptStoreService.note() ?? '';
  handleValueComment(value: string) {
    this.addConceptStoreService.note.set(value);
  }

  valueAmount = this.addConceptStoreService.amount() ?? undefined;
  handleValueAmount(value: number) {
    this.addConceptStoreService.amount.set(value);
  }
}
