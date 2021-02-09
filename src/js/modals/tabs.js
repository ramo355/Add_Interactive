export const tabs = (headerSelector, tabsSelector, contentSelector, active) => {
  const header = document.querySelector(headerSelector),
    tabs = document.querySelectorAll(tabsSelector),
    content = document.querySelectorAll(contentSelector);

  function hideTabsContent() {
    content.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove(active);
    });
  }

  function showTabsContent(i = 0) {
    content[i].style.display = "block";
    tabs[i].classList.add(active);
  }

  hideTabsContent();
  showTabsContent();

  header.addEventListener("click", (e) => {
    const target = e.target;
    if (
      (target && target.classList.contains(tabsSelector.replace(/\./, ""))) ||
      target.parentNode.classList.contains(tabsSelector.replace(/\./, ""))
    ) {
      tabs.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabsContent();
          showTabsContent(i);
        }
      });
    }
  });
};
