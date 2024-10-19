let diiv = document.querySelector("div.area");
let text = document.querySelector("textarea#oo");
let timer = document.querySelector("div.timer");
let show = document.querySelector("div.show");
let ok = document.querySelector("button.ok");
let inputvo = document.querySelector("input#text");
let reset = document.querySelector("button.reset");
let time = [0, 0, 0, 0];
let flag = false;
let stop;
const starttimer = () => {
  let datatime = `${time[0]}:${time[1]}:${time[2]}`;
  time[3]++;
  time[0] = Math.floor(time[3] / 6000);
  time[1] = Math.floor(time[3] / 100 - time[0] * 60);
  time[2] = Math.floor(time[3] - (time[1] * 100 + time[0] * 6000));
  timer.innerHTML = datatime;
};
const checktime = () => {
  let tvorodi = text.value;
  let tmatch = show.substring(0, tvorodi.lenght );
  if (tvorodi === show) {
    border.style.borderColor = "green";
    clearInterval(stop)
  } else if (tvorodi === tmatch) {
    border.style.borderColor = "yellow";
  } else {
    border.style.borderColor = "red";
  }
};
const starter = () => {
  if (!flag) {
    stop = setInterval(starttimer, 10);
    flag = true;
  }
};
text.addEventListener("keypress", starter);

  reset.addEventListener("click", () => {
    randomstring();
    inputvo.value = "";
    timer.innerHTML=`00:00:00`
  });
  function randomstring() {
    let randomstring1 = Math.random().toString(36).substring(2, 7);
    let randomstringarray = randomstring1.split("");
    let changestring = randomstringarray.map((char) => {
      if (Math.random() > 0.5) {
        return char.toUpperCase();
      } else {
      return char;
      }
    });
    show.innerHTML = changestring.join("");
    check(changestring.join(""));
  };
  randomstring();