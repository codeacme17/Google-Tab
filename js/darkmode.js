const body = document.querySelector("body");

const setDarkMode = function () {
  let customerDarkMatched = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (customerDarkMatched) body.classList.add("dark");
};

export default setDarkMode;
