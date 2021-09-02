const tabBtns = document.querySelectorAll(".tab-trigger");
const tabs = document.querySelectorAll(".tab");

document.querySelectorAll(".tab-trigger").forEach((element) => {
    element.addEventListener("click", (e) => {
        const tabId = e.target.dataset.value;
        document.querySelectorAll(".tab-trigger").forEach((child)=>child.classList.remove("tab-trigger--active"));
        document.querySelectorAll(".tab").forEach((child)=>child.classList.remove("tab--active"));
        e.target.classList.add("tab-trigger--active");
        document.querySelector(`#${tabId}`).classList.add("tab--active"); 
    });
});
document.querySelector('.tab-trigger').click();
