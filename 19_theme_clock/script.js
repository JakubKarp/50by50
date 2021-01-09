const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const needleMinute = document.querySelector(".needle.minute");
const needleHour = document.querySelector(".needle.hour");
const needleSecond = document.querySelector(".needle.second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sutarday",
];

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

toggle.addEventListener("click", () => {
  const html = document.querySelector("html");
  html.classList.toggle("dark");
  toggle.innerText = html.classList.contains("dark")
    ? "Light mode"
    : "Dark mode";
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hourEl.style.transform = `translate(-50%, -100%) rotate(
    ${scale(hoursForClock, 0, 12, 0, 360)}deg
  )`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(
    ${scale(minutes, 0, 59, 0, 360)}deg
  )`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(
    ${scale(seconds, 0, 59, 0, 360)}deg
  )`;

  needleHour.style.transition = `${hours === 0 ? "none" : "all 0.5s ease-in"}`;
  needleMinute.style.transition = `${minutes === 0 ? "none" : "all 0.5s ease-in"}`;
  needleSecond.style.transition = `${seconds === 0 ? "none" : "all 0.5s ease-in"}`;

  timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// map a range of numbers to another range of numbers
// from 12 hours to 360 deg - for exmaple (in our case)
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);
