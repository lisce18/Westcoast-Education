export const menuList = [
  {
    id: 1,
    text: "Westcoast Education",
    href: "../Pages/first-page.html",
  },
  {
    id: 2,
    text: "Våra Kurser",
    href: "../Pages/gallery.html",
  },
  {
    id: 3,
    text: "Kontakta Oss",
    href: "../Pages/contact.html",
  },
  {
    id: 4,
    text: "Mina Sidor",
    href: "../Pages/my-pages.html",
  },
  {
    id: 6,
    text: "Admin",
    href: "../Admin/admin.html",
  },
];

if (localStorage.getItem("email") !== null) {
  menuList.push({
    id: 5,
    text: "Logga ut",
    href: "../index.html",
    action: () => {
      localStorage.removeItem("email");
      localStorage.removeItem("isLoggedIn");
      location.reload();
    },
  });
}
