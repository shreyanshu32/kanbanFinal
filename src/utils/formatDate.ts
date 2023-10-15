const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const formatDate = () => {
  const date = new Date();
  const month = months[date.getMonth()];
  const weekDay = days[date.getDay()];
  const day = date.getDate();
  const fullDay = ` ${weekDay}, ${month} ${day}`;
  return fullDay;
};

export default formatDate();
