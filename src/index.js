let items = document.querySelectorAll(".accordion .item");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    if (items[i].classList.contains("active")) {
      items[i].classList.remove("active");
    } else {
      let activeNode = null;
      try {
        activeNode = document.querySelector(".accordion .active");
      } catch (msg) {}
      items[i].classList.add("active");
      if (activeNode) {
        activeNode.classList.remove("active");
      }
    }
  });
}
