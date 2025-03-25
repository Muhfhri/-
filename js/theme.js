(function() {
    var darkThemeSelected = localStorage.getItem("darkSwitch") === "dark";
    document.documentElement.setAttribute("data-theme", darkThemeSelected ? "dark" : "light");
})();