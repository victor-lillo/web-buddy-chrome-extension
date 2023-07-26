const MIN_MILLISECONDS = 1000 * 60
const HOUR_MILLISECONDS = 1000 * 60 * 60
const DAY_MILLISECONDS = 1000 * 60 * 60 * 24
const MONTH_MILLISECONDS = 1000 * 60 * 60 * 24 * 30

enum FORMATS {
  second = 'second',
  minute = 'minute',
  hour = 'hour',
  day = 'day',
  month = 'month',
}

const rtf = new Intl.RelativeTimeFormat('en', {
  numeric: 'auto',
  style: 'long',
})

const getMsDifferenceFromToday = (timestamp) => {
  const todayTimestamp = new Date().getTime()
  const msDifference = timestamp - todayTimestamp
  return msDifference
}

export function getRelativeTime(timestamp: number) {
  const msDifference = getMsDifferenceFromToday(timestamp)

  console.log(msDifference)
  // const daysDifference = Math.round(msDifference / DAY_MILLISECONDS)
  const positiveDifference = msDifference * -1

  if (positiveDifference >= MONTH_MILLISECONDS) {
  } else if (positiveDifference >= DAY_MILLISECONDS) {
    console.log('Day')
  } else if (positiveDifference >= HOUR_MILLISECONDS) {
    console.log('Hour')
  } else if (positiveDifference >= MIN_MILLISECONDS) {
    console.log('Minute')
    const minDifference = Math.round(msDifference / MIN_MILLISECONDS)
    return rtf.format(minDifference, 'minute')
  }
  // const relative = rtf.format(msDifference / MIN_MILLISECONDS, 'minute')
  // console.log(relative)
  // return rtf.format(daysDifference, FORMATS.day)
}
