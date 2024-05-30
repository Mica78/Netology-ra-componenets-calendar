import moment from "moment/min/moment-with-locales"
import "moment/locale/ru.js"

import { data } from "./utils"

moment.locale('ru')

const arr = data();

export const Calendar = (props) => {

  const now = props.date
  const date = moment(now).format("LLLL")

  const [weekDay, currentDay, month, year] = date.split(" ")

  const correctWeekDay = weekDay.charAt(0).toUpperCase() + weekDay.replace(",", "").slice(1)
  const strictMonth = moment(now).format("MMMM").charAt(0).toUpperCase() + moment(now).format("MMMM").slice(1)
  let week = 0;

  return (
    <div className="ui-datepicker">
    <div className="ui-datepicker-material-header">
      <div className="ui-datepicker-material-day">{correctWeekDay}</div>
      <div className="ui-datepicker-material-date">
        <div className="ui-datepicker-material-day-num">{currentDay}</div>
        <div className="ui-datepicker-material-month">{month}</div>
        <div className="ui-datepicker-material-year">{year}</div>
      </div>
    </div>
    <div className="ui-datepicker-header">
      <div className="ui-datepicker-title">
        <span className="ui-datepicker-month">{strictMonth}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
      </div>
    </div>
    <table className="ui-datepicker-calendar">
      <colgroup>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col className="ui-datepicker-week-end"></col>
        <col className="ui-datepicker-week-end"></col>
      </colgroup>
      <thead>
        <tr>
          <th scope="col" title="Понедельник">Пн</th>
          <th scope="col" title="Вторник">Вт</th>
          <th scope="col" title="Среда">Ср</th>
          <th scope="col" title="Четверг">Чт</th>
          <th scope="col" title="Пятница">Пт</th>
          <th scope="col" title="Суббота">Сб</th>
          <th scope="col" title="Воскресенье">Вс</th>
        </tr>
      </thead>
      <tbody>
        {arr.map(weekData =>
        <tr key={week++}>
          {weekData.map(day =>
          <td key={day}
            className={
              day == moment(now).format("DD/MM/YYYY") ? "ui-datepicker-today" :
                week == 0 && day.split("/")[0] > 7 ? "ui-datepicker-other-month" :
                week == arr.length - 1 && day.split("/")[0] < 7 ? "ui-datepicker-other-month" : ""
            }>{day.split("/")[0]}
          </td>)}
        </tr>)
        }
        </tbody>
    </table>
  </div>
  )
}

export default Calendar
