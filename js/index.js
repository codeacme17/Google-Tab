import Ping from "./ping.js";
import setDarkMode from "./darkmode.js";

setDarkMode();

const input = document.getElementById("input");
const baidu = "https://www.baidu.com/s?wd=";
const google = "https://www.google.com/search?q=";
const ping = new Ping("https://www.google.com/");

const pingRes = await ping.ping();

input.addEventListener("keydown", (e) => {
  let isEnter = e.key === "Enter";
  if (isEnter) {
    if (pingRes === "success") {
      window.location = google + input.value;
    } else {
      window.location = baidu + input.value;
    }
  }
});
