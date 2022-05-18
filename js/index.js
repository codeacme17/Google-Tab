const body = document.querySelector("body");
const input = document.getElementById("input");

let customerDarkMatched = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

if (customerDarkMatched) body.classList.add("dark");

input.addEventListener("keydown", (e) => {
  let isEnter = e.key === "Enter";

  if (isEnter)
    window.location = "https://www.google.com/search?q=" + input.value;
});
