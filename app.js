let onButton = document.getElementById("onButton");
let offButton = document.querySelector("#offButton");
let imgLampu = document.querySelector(".img-lampu");

onButton.addEventListener("click", function () {
  imgLampu.setAttribute("src", "../asset/img/Asset-1.png");
});

offButton.addEventListener("click", function () {
  imgLampu.setAttribute("src", "../asset/img/Asset-2.png");
});
