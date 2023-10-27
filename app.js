const openElement =
  document.getElementById("open");
const closeElement =
  document.getElementById("close");
const changeTheme =
  document.querySelector(".container");
openElement.addEventListener("click", () =>
  changeTheme.classList.add("show-nav")
);
closeElement.addEventListener("click", () =>
  changeTheme.classList.remove("show-nav")
);
