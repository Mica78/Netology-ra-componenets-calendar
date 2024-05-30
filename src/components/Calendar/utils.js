//* пришлось работать со строками через moment, еще костыль))

import moment from "moment"

export const now = new Date(2017, 2, 8)

export const data = () => {
  const arrTotal = [];
  const firstWeek = getFirstWeek()
  arrTotal.push(firstWeek)

  const lastWeek = getLastWeek()

  const numberOtherWeeks = (lastWeek[0].split("/")[0]- firstWeek[6].split("/")[0] - 1) / 7;

  let currentD = moment(firstWeek[6], 'DD/MM/YYYY');

  for (let i = 0; i < numberOtherWeeks; i++) {
    let a = [];
    for(let i = 0; i < 7; i++) {
      currentD = currentD.add(1, 'd');
      a.push(currentD.format('DD/MM/YYYY'))
    }
    arrTotal.push(a)
  }
  arrTotal.push(lastWeek)
  return arrTotal
}


function getFirstWeek() {
  const firstDay = new Date(moment(now).year(), moment(now).month(), 1);
  let weekDayOfFirstDay = moment(now).startOf('month').day();
  if (weekDayOfFirstDay === 0) weekDayOfFirstDay = 1 //костыль

  const arr = [];

  for (let i = weekDayOfFirstDay-1; i >= 1; i -= 1) {
    arr.push(moment(firstDay).subtract(i, 'd').format('DD/MM/YYYY'))
  }
  arr.push(moment(firstDay).format('DD/MM/YYYY'))
  for (let i = 1; i <= 7 - weekDayOfFirstDay; i++) {
    const d = moment(firstDay).add(i, 'd').format('DD/MM/YYYY')
    arr.push(d)
  }

  return arr
}

function getLastWeek() {
  const lastDate = new Date(moment(now).year(), moment(now).month(), moment(now).endOf('month').date());
  let weekDayOfLastDay = moment(now).endOf('month').day();
  const arr = [];
  if (weekDayOfLastDay === 0) weekDayOfLastDay = 1 //еще костыль
  for (let i = weekDayOfLastDay-1; i>=1; i--) {
    arr.push(moment(lastDate).subtract(i, 'd').format('DD/MM/YYYY'))
  }
  arr.push(moment(lastDate).format('DD/MM/YYYY'))
  for(let i = 1; i < 8 - weekDayOfLastDay; i++) {
    arr.push(moment(lastDate).add(i, 'd').format('DD/MM/YYYY'))
  }
  return arr
}
