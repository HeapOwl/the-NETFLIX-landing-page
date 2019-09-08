const tabItem = document.querySelectorAll(".tab-item");
const TabItemContent = document.querySelectorAll(".tab-content-item");
function changer(e) {
  borderRemover();

  this.classList.add("tab-border");

  const showing = document.querySelector(`#${this.id}-content`);

  showRemover();
  showing.classList.add("show");
}
function borderRemover() {
  tabItem.forEach(ele => ele.classList.remove("tab-border"));
}
function showRemover() {
  TabItemContent.forEach(ele => ele.classList.remove("show"));
}

tabItem.forEach(ele => ele.addEventListener("click", changer));
