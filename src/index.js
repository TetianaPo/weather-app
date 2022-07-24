function displayTemperature(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  document
    .querySelector("#icon")
    .setAttribute("alt", response.data.weather[0].description);
}

let apiKey = "dd4d68aa948c5b775af8d0b5d939e242";
let city = "Paris";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);

function formatDate(dateTime) {
  let hours = dateTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = dateTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}
let now = new Date();
let timeElement = document.querySelector("#time");
timeElement.innerHTML = formatDate(now);

function formDate(dateDay) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayIndex = dateDay.getDay();
  let day = days[dayIndex];
  return `${day}`;
}
let day = document.querySelector("#day");
day.innerHTML = formDate(now);

function formatDate(curDate) {
  let dayToday = curDate.getDate();
  let months = [
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

  let monthIndex = curDate.getMonth();
  let month = months[monthIndex];
  let year = curDate.getFullYear();
  return `${dayToday} ${month} ${year}`;
}
let Today = new Date();
let curdate = document.querySelector("#today");
curdate.innerHTML = formDate(Today);
