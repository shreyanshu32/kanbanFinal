const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const formatDate = () => {
  const date = new Date();
  const month = months[date.getMonth()];
  const weekDay = days[date.getDay()];
  const day = date.getDate();
  const fullDay = ` ${weekDay}, ${month} ${day}`;
  return fullDay;
};

export default formatDate();
