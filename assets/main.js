const config = window.PEERLY_CONFIG || {};
const bookingLink = document.querySelector("[data-booking-link]");
const bookingStatus = document.querySelector("[data-booking-status]");
const menuButton = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#site-nav");

if (bookingLink && bookingStatus) {
  if (/^https:\/\/docs\.google\.com\/forms\//.test(config.googleFormUrl || "")) {
    bookingLink.href = config.googleFormUrl;
    bookingLink.target = "_blank";
    bookingLink.rel = "noopener noreferrer";
    bookingStatus.textContent = "The enquiry form opens in a new tab.";
  } else {
    bookingLink.setAttribute("aria-disabled", "true");
    bookingLink.addEventListener("click", (event) => event.preventDefault());
    bookingStatus.textContent = "Booking link awaiting configuration. Please contact Peerly once contact details are published.";
  }
}

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const phoneLink = document.querySelector("[data-contact-phone]");
const emailLink = document.querySelector("[data-contact-email]");
const contactPlaceholder = document.querySelector("[data-contact-placeholder]");
let hasContact = false;

if (phoneLink && config.contactPhone) {
  phoneLink.href = `tel:${config.contactPhone.replace(/[^+\d]/g, "")}`;
  phoneLink.textContent = config.contactPhone;
  phoneLink.classList.remove("hidden");
  hasContact = true;
}

if (emailLink && config.contactEmail) {
  emailLink.href = `mailto:${config.contactEmail}`;
  emailLink.textContent = config.contactEmail;
  emailLink.classList.remove("hidden");
  hasContact = true;
}

if (hasContact && contactPlaceholder) contactPlaceholder.remove();

document.querySelectorAll("[data-service-area]").forEach((serviceArea) => {
  if (config.serviceArea) serviceArea.textContent = config.serviceArea;
});

document.querySelectorAll("[data-current-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});
