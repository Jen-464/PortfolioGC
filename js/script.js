const getBurgerSection = document.getElementById("hamburger");
const getNavList = document.getElementById("nav-list");
const getLogo = document.getElementById("logo");

getBurgerSection.addEventListener("click", function () {
    getBurgerSection.classList.toggle("active");
    getNavList.classList.toggle("show");
    getLogo.classList.toggle("hide");
})

document.addEventListener("click", function (e) {
    if (!getBurgerSection.contains(e.target) && !getNavList.contains(e.target)) {
        getBurgerSection.classList.remove("active");
        getNavList.classList.remove("show");
        getLogo.classList.remove("hide");
    }

    if (getNavList.contains(e.target)) {
        getBurgerSection.classList.remove("active");
        getNavList.classList.remove("show");
        getLogo.classList.remove("hide");
    }
})