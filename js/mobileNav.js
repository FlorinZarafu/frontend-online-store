document.addEventListener("DOMContentLoaded", () => {
  //hamburger mobile icon nav
  let openMainNav = document.querySelector(".mobile-icon");
  // close mobile icon nav
  let closeMainNav = document.querySelector(".close-mobile-nav");
  // categories nav list
  let categoriesList = document.querySelector(".categories-nav");
  // close button for categories sub link list
  let closeSubLinkList = document.querySelectorAll(".close-sub-links");
  //get all categories links
  let categoriesLinks = document.querySelectorAll(".side-links");
  //get categories sub link list
  // const subLinkList = document.querySelectorAll(".category-sub-link");

  // Open Categories List
  openMainNav.addEventListener("click", () => {
    categoriesList.style.left = "0";
    categoriesList.style.transition = "0.5s";
  });
  // Close Categories List
  closeMainNav.addEventListener("click", () => {
    categoriesList.style.left = "-100%";
    categoriesList.style.transition = "0.5s";
  });

  // Functionality For Close Sub Category List
  closeSubLinkList.forEach(closeSubLink => {
    closeSubLink.addEventListener("click", e => {
      let linkList = e.target.parentElement.parentElement;
      linkList.style.left = "-100%";
    });
  });

  // Show categories Link List
  categoriesLinks.forEach(link => {
    if (screen.width < 768) {
      link.addEventListener("click", e => {
        let linkList = e.target.parentElement.childNodes[5];
        linkList.style.left = "0px";
        linkList.style.transition = "0.5s";
      });
    }
  });
});
