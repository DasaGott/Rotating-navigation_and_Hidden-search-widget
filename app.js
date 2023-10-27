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

let searchInput =
  document.querySelector("#search");

let searchIcon = document.querySelector(
  "#search-button"
);

searchIcon.addEventListener("click", () => {
  searchIcon.classList.toggle("active");
  searchInput.classList.toggle("active");
});
