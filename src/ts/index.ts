function toggleClass(element: HTMLElement, className: string) {
  const classExist = element.classList.contains(className);
  classExist
    ? element.classList.remove(className)
    : element.classList.add(className);
}

function handleSidebar() {
  console.log("Hello");
  const sidebar = document.getElementsByClassName("main-sidebar")[0];
  toggleClass(sidebar as HTMLElement, "show");
}
const toggleSidebarButtons = document.getElementsByClassName("toggleSidebar");
for (let i = 0; i < toggleSidebarButtons.length; i++) {
  const toggleSidebarButton = toggleSidebarButtons[i];
  toggleSidebarButton?.addEventListener("click", handleSidebar);
}
console.log("Hello from ts");
