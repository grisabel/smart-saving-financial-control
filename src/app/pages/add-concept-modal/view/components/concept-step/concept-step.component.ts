import { Component } from '@angular/core';
import { AddConceptStoreService } from '../../store/add-concept-store.service';
import { DateTimeModel } from '@app/utils/Datetime/DatetimeInterfaceService';
import DateTimeService from '@app/utils/Datetime/DatetimeService';

const getRuleDateUntilToday = (() => {
  return {
    validate: (datetime: DateTimeModel): boolean => {
      const currentDate = DateTimeService.currentDate();
      const isValid = DateTimeService.validate(
        datetime,
        currentDate,
        DateTimeService.VALIDATE_SET.UNTIL
      );
      return isValid;
    },
  };
})();

@Component({
  selector: 'app-concept-step',
  templateUrl: './concept-step.component.html',
  styleUrls: ['./concept-step.component.scss'],
})
export class ConceptStepComponent {
  inputNumberLabel = 'Importe';
  inputDateLabel = 'Fecha';
  inputCommentLabel = 'Comentario';
  isValidDate: boolean = true;

  constructor(private addConceptStoreService: AddConceptStoreService) {}

  valueDate = this.addConceptStoreService.date() ?? '';
  handleValueDate(value: string) {
    const dateTime: DateTimeModel = {
      date: value,
      format: 'dd/MM/yyyy',
    };
    if (!DateTimeService.isValid(dateTime)) {
      this.isValidDate = true;
      return;
    }

    this.isValidDate = getRuleDateUntilToday.validate(dateTime);
    if (this.isValidDate) {
      this.addConceptStoreService.date.set(value);
    }
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
