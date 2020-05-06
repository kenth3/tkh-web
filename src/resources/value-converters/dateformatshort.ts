import * as moment from "moment";

export class DateFormatShortValueConverter {
  toView(value) {
    return moment(value).format("MM/DD/YYYY");
  }

  fromView(dateText) {
    return new Date(dateText);
  }
}
