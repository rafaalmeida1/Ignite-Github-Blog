import moment from 'moment';

export function relativeDataFormatter(data: string) {
  return moment(data).fromNow(); // a lib moment vai comparar a data que foi criado o post, com a data de agora.
}