const DAY_MILLISECONDS = 1000 * 60 * 60 * 24
const HOUR_MILLISECONDS = 1000 * 60 * 60

enum FORMATS {
  day = 'day',
  hour = 'hour',
}

const rtf = new Intl.RelativeTimeFormat('en', {
  numeric: 'auto',
  style: 'long',
})

function getRelativeTime(timestamp: number) {
  const daysDifference = Math.round((timestamp - new Date().getTime()) / DAY_MILLISECONDS)

  return rtf.format(daysDifference, FORMATS.day)
}
