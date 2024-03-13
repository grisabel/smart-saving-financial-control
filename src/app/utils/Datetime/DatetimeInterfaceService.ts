export type DateString = string;
export type DateFormat = string;
export type TimestampMs = string;
export type ErrorBoolean = boolean;

export interface DateTimeModel {
  date: DateString;
  format: DateFormat;
}

export type DateTimeSortFnc = (
  dateTime: TimestampMs,
  compareDateTime: TimestampMs
) => number;

export type DateTimeSortSet = {
  ASC: DateTimeSortFnc;
  DES: DateTimeSortFnc;
};

export type DateTimeCompareFnc = (
  dateTime: TimestampMs,
  compareDateTime: TimestampMs
) => boolean;

export type DateTimeCompareSet = {
  UNTIL: DateTimeCompareFnc;
  UNTIL_EXCLUSIVE: DateTimeCompareFnc;
  SINCE: DateTimeCompareFnc;
  SINCE_EXCLUSIVE: DateTimeCompareFnc;
  EQUAL: DateTimeCompareFnc;
};

export interface DateTimeInterfaceService {
  parse: (dateTime: DateTimeModel, format: DateFormat) => DateString;

  today(): DateString; // DATE_FORMATS.Date
  now(): TimestampMs;

  isValid(dateTime: DateTimeModel): boolean;

  validate(
    dateTime: DateTimeModel,
    compareDateTime: DateTimeModel,
    comparator: DateTimeCompareFnc
  ): boolean;
  VALIDATE_SET: DateTimeCompareSet;

  sort(
    dateTime: DateTimeModel,
    compareDateTime: DateTimeModel,
    sorter: DateTimeSortFnc
  ): number;
  SORT_SET: DateTimeSortSet;

  calculatePastDate: (
    dateTime: DateTimeModel,
    relative: { amount: number; unit: "days" | "weeks" | "months" | "years" }
  ) => DateTimeModel;

  getMonthLimits(
    dateTime: DateTimeModel,
    unit: "week" | "month" | "year"
  ): {
    dateStart: DateTimeModel;
    dateEnd: DateTimeModel;
  };
}
