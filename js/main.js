// tabs
const tabTriggers = document.querySelector(".auth__tabs-triggers");
const tabs = document.querySelector(".tabs-content");
tabTriggers.addEventListener("click", (e) => {
    // console.log(e.target);
    if (
        e.target.classList.contains("tab-trigger") &&
        !e.target.classList.contains("tab-trigger--active")
    ) {
        if (e.target == tabTriggers.children[0]) {
            tabTriggers.children[0].classList.add("tab-trigger--active");
            tabs.children[0].classList.add("tab--active");
            tabTriggers.children[1].classList.remove("tab-trigger--active");
            tabs.children[1].classList.remove("tab--active");
        } else {
            tabTriggers.children[1].classList.add("tab-trigger--active");
            tabs.children[1].classList.add("tab--active");
            tabTriggers.children[0].classList.remove("tab-trigger--active");
            tabs.children[0].classList.remove("tab--active");
        }
    }
});

// document.querySelectorAll(".tab-trigger").forEach((element) => {
//     element.addEventListener("click", (e) => {
//         const tabId = e.target.dataset.value;
//         document.querySelectorAll(".tab-trigger").forEach((child) => child.classList.remove("tab-trigger--active"));
//         document.querySelectorAll(".tab").forEach((child) => child.classList.remove("tab--active"));
//         e.target.classList.add("tab-trigger--active");
//         document.querySelector(`#${tabId}`).classList.add("tab--active");
//         //===========
//     });
// });
document.querySelector(".tab-trigger").click();
// tabs //

//  remember me

const rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("email");

if (localStorage.checkbox && localStorage.checkbox !== "") {
    rmCheck.setAttribute("checked", "checked");
    emailInput.value = localStorage.email;
} else {
    rmCheck.removeAttribute("checked");
    emailInput.value = "";
}
rmCheck.addEventListener("click", () => {
    if (rmCheck.checked && emailInput.value !== "") {
        localStorage.email = emailInput.value;
        localStorage.checkbox = rmCheck.value;
    } else {
        localStorage.email = "";
        localStorage.checkbox = "";
    }
});

//  remember me //

//  show password
function showPass() {
    const activeTab = document.querySelector(".tab--active");
    const passwordDiv = activeTab.querySelector(".password-div");
    const passwordInput = activeTab.querySelector("input#password");
    console.log(passwordInput.type);
    const passwordShowIcon = passwordDiv.querySelector(".password-toggle");
    passwordShowIcon.children[0].classList.toggle("password--show");
    if (passwordInput.type == "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
//  show password   //

//  sign up check
const terms = document.querySelector("#terms");
const signupBtn = document.querySelector("#sign-up-btn");
terms.addEventListener("change", (e) => {
    if (terms.checked) {
        signupBtn.classList.remove("disabled");
    } else {
        signupBtn.classList.add("disabled");
    }
});

//  sign up check   //
