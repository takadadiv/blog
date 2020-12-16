import dayjs from 'dayjs'

export default (ctx, inject) => {
  inject('formatDate', (date, format = 'YYYY-MM-DD') => dayjs(date).format(format))
}
