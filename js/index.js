import Ping from "./ping.js";
import setDarkMode from "./darkmode.js";

const input = document.getElementById("input");
const baidu = "https://www.baidu.com/s?wd=";
const google = "https://www.google.com/search?q=";
const ping = new Ping("https://www.google.com/");

setDarkMode();

let pingRes = await ping.ping();

input.addEventListener("keydown", (e) => {
  let isEnter = e.key === "Enter";
  if (isEnter) {
    if (pingRes === "") {
      window.location = google + input.value;
    } else {
      window.location = baidu + input.value;
    }
  }
});
