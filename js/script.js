var menu_button = document.getElementById("menu_button");
var nav_menu = document.getElementById("nav_items");

menu_button.onclick = () => 
{
    nav_menu.classList.toggle("active");
    console.log(nav_menu.classList);
}

document.onclick = (e) => {
    if (e.target.id !== "nav_items" && e.target.id !== "menu_button"){
        nav_menu.classList.remove("active");
    }
}