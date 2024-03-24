import { Component } from '@angular/core';
import { AddConceptStoreService } from '../../store/add-concept-store.service';
import { DateTimeModel } from '@app/utils/Datetime/DatetimeInterfaceService';
import DateTimeService from '@app/utils/Datetime/DatetimeService';

const getRuleDateUntilToday = (() => {
  return {
    validate: (_inputValue: string): boolean => {
      const dateTime: DateTimeModel = {
        date: _inputValue,
        format: 'dd/MM/yyyy',
      };
      if (!DateTimeService.isValid(dateTime)) {
        return true;
      }

      const currentDate = DateTimeService.currentDate();
      const isValid = DateTimeService.validate(
        dateTime,
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
    this.addConceptStoreService.date.set(value);
    this.isValidDate = getRuleDateUntilToday.validate(value);
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
