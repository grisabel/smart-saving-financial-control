import { Component } from '@angular/core';
import { AddConceptStoreService } from '../../store/add-concept-store.service';
import { DateTimeModel } from '@app/utils/Datetime/DatetimeInterfaceService';
import DateTimeService from '@app/utils/Datetime/DatetimeService';

const getRuleDateUntilToday = (currentDate: DateTimeModel) => {
  return {
    validate: (datetime: DateTimeModel): boolean => {
      const isValid = DateTimeService.validate(
        datetime,
        currentDate,
        DateTimeService.VALIDATE_SET.UNTIL
      );
      return isValid;
    },
  };
};

const getRuleDateSince = (sinceDatetime: DateTimeModel) => {
  return {
    validate: (datetime: DateTimeModel): boolean => {
      const isValid = DateTimeService.validate(
        datetime,
        sinceDatetime,
        DateTimeService.VALIDATE_SET.SINCE
      );
      return isValid;
    },
  };
};

@Component({
  selector: 'app-concept-step',
  templateUrl: './concept-step.component.html',
  styleUrls: ['./concept-step.component.scss'],
})
export class ConceptStepComponent {
  untilDate: DateTimeModel = DateTimeService.currentDate();
  isValidUntilDate: boolean = true;

  sinceDate: DateTimeModel = {
    date: '01/01/2023',
    format: 'dd/MM/yyyy',
  };
  isValidSinceDate: boolean = true;

  constructor(private addConceptStoreService: AddConceptStoreService) {}

  valueDate = this.addConceptStoreService.date() ?? '';
  handleValueDate(value: string) {
    const dateTime: DateTimeModel = {
      date: value,
      format: 'dd/MM/yyyy',
    };

    if (!DateTimeService.isValid(dateTime)) {
      this.isValidUntilDate = true;
      return;
    }

    this.isValidUntilDate = getRuleDateUntilToday(this.untilDate).validate(
      dateTime
    );
    this.isValidSinceDate = getRuleDateSince(this.sinceDate).validate(dateTime);

    if (this.isValidUntilDate && this.isValidSinceDate) {
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
