import { days, months } from "@/data/date";

const formatDate= () => {
  const date = new Date();
  const month = months[date.getMonth()];
  const weekDay = days[date.getDay()];
  const day = date.getDate();
  const fullDay = ` ${weekDay}, ${month} ${day}`;
  return fullDay;
};
export default formatDate();
