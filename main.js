// Variable
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

const deskripsi = document.querySelector(".deskripsi");
const changeDeskripsi = deskripsi.innerHTML.split("<br>").join(" ");

// MediaQuery
if (window.matchMedia("(max-device-width: 960px)").matches) {
  deskripsi.innerHTML = changeDeskripsi;
}
console.log(changeDeskripsi);

// Feature
selectBtn.addEventListener("click", () => {
  optionMenu.classList.toggle("active");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});
