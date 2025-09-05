// Swiper initialization
var swiper = new Swiper(".testimonial-slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
  },
});

// Slick slider initialization
$(function () {
  $(".logo-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4500,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: true,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  });
});

const image = document.getElementById("mainImage");

function changeImage(type, hoveredElement) {
  image.src = getImageSrc(type);
  image.classList.add("zoom-in"); // Zoom-out effect

  const currentBlock = hoveredElement.closest(".content-block");

  document.querySelectorAll(".content-block").forEach((block) => {
    if (block !== currentBlock) {
      block.classList.add("blur");
    }
  });
}

function resetImage() {
  image.src = "img/Equinix_QBO 7-Dark.svg";
  image.classList.remove("zoom-in"); // Remove zoom-out effect

  document.querySelectorAll(".content-block").forEach((block) => {
    block.classList.remove("blur");
  });
}

function getImageSrc(type) {
  switch (type) {
    case "apps":
      return "img/Copy of Copy of Equinix_QBO 3-Dark.svg";
    case "asyncAPI":
      return "img/Copy of Copy of Equinix_QBO 6-Dark.svg";
    case "gpu cloud":
      return "img/Copy of Copy of Equinix_QBO 4-Dark.svg";
    case "bare metal":
      return "img/Copy of Copy of Equinix_QBO 5-Dark.svg";
    default:
      return "img/Equinix_QBO 7-Dark.svg";
  }
}

function updateDotBackgrounds() {
  const isDarkMode =
    document.documentElement.getAttribute("data-dracula-scheme") === "dark";
  document
    .querySelectorAll(
      "main .Equinix-main-div span.dot, main .Equinix-main-div span.dot-left"
    )
    .forEach((el) => {
      el.style.setProperty(
        "background-color",
        isDarkMode ? "#908574" : "",
        "important"
      );
    });
}

updateDotBackgrounds();

const observer = new MutationObserver(updateDotBackgrounds);
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["data-dracula-scheme"],
});

document
  .querySelector(".video-thumbnail")
  .addEventListener("click", function () {
    this.style.display = "none"; // hide thumbnail
    document.getElementById("video-iframe").style.display = "block"; // show video
  });

let slides = document.querySelectorAll(".hero-overlay-content");
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
}

setInterval(showNextSlide, 8000);

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar-menus");
  const toggleMenu = document.getElementById("toggle-menu");

  // Function to sync classes
  function syncToggleMenu() {
    if (sidebar.classList.contains("open")) {
      toggleMenu.classList.add("menu-active"); // class added here
    } else {
      toggleMenu.classList.remove("menu-active"); // removed here
    }
  }

  // Initial check
  syncToggleMenu();

  // Watch for changes to sidebar classes
  const observer = new MutationObserver(() => {
    syncToggleMenu();
  });

  observer.observe(sidebar, { attributes: true, attributeFilter: ["class"] });
});

window.addEventListener("scroll", () => {
  const header = document.getElementById("page-header");

  if (window.scrollY > 50) {
    // adjust scroll position
    header.classList.add("header-sticky");
  } else {
    header.classList.remove("header-sticky");
  }
});



const displayImage = document.getElementById("displayImage");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(thumb => {
  thumb.addEventListener("mouseenter", () => {
    const newImage = thumb.getAttribute("data-image");
    displayImage.src = newImage;
  });

  thumb.addEventListener("mouseleave", () => {
    displayImage.src = "left-default.jpg"; // reset to default
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuGroups = document.querySelectorAll(".menus_item");

  menuGroups.forEach(menu => {
    const arrow = menu.querySelector(".arrow"); // assuming chevron/arrow has class 'arrow'

    if (arrow) {
      arrow.addEventListener("click", function (e) {
        e.stopPropagation(); // prevent parent link click
        menu.classList.toggle("open"); // toggle only this menu
      });
    }
  });
});

