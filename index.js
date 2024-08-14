const deg = 6;

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  document.getElementById("hr").style.transform = `rotate(${hh + mm / 12}deg)`;

  document.getElementById("mn").style.transform = `rotate(${mm}deg)`;
  document.getElementById("sc").style.transform = `rotate(${ss}deg)`;
}, 1000);
