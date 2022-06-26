class MobileNavbar {
  constructor(mobileMenu, navList, navLinks, navItemAccount) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.navItemAccount = document.querySelector(navItemAccount);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
  }

  loadUserInformations() {

    const accountNavLink = document.getElementById('account-link');
    const account = Security.getCurrentUser();

    if (!account) {

      accountNavLink.text = 'Login';
      accountNavLink.addEventListener('click', () => {
        window.location.href = "../login/login.html";
      });
    } else {
      accountNavLink.text = account.name;
      accountNavLink.addEventListener('click', () => {
        window.location.href = "../profile/profile.html";
      })
    }
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    this.addClickEvent();

    const accountNavLink = document.getElementById('account-link');

    if (accountNavLink) {
      this.loadUserInformations();
    }


    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".menu",
  ".nav-list",
  ".nav-item",
  "#account"
);
mobileNavbar.init();