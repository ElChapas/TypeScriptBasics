import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28);
const res = subDays(date, 30);
const myDate = format(res, 'yyyy/MM/dd');

console.log(date);
console.log(myDate);

