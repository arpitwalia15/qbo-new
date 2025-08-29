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

(function () {
  // guard to avoid double-initializing
  if (window.__missionTimelineInitialized) return;
  window.__missionTimelineInitialized = true;

  document.addEventListener("DOMContentLoaded", function () {
    const root = document.querySelector(".mission-timeline");
    if (!root) return;

    const yearsContainer = root.querySelector(".mission-years");
    if (!yearsContainer) return;
    const yearNodes = Array.from(yearsContainer.querySelectorAll("span"));
    if (!yearNodes.length) return;

    const titleNode = root.querySelector("#timeline-title");
    const descNode = root.querySelector("#timeline-description");

    // create progress-line if missing
    let progress = yearsContainer.querySelector(".progress-line");
    if (!progress) {
      progress = document.createElement("div");
      progress.className = "progress-line";
      yearsContainer.insertBefore(progress, yearsContainer.firstChild);
    }

    function updateTimeline(targetEl) {
      if (!targetEl || yearNodes.indexOf(targetEl) === -1) return;

      const idx = yearNodes.indexOf(targetEl);

      // active / completed classes
      yearNodes.forEach((n, i) => {
        n.classList.toggle("active", n === targetEl);
        n.classList.toggle("completed", i < idx);
      });

      // update title & description
      if (titleNode)
        titleNode.textContent = targetEl.dataset.year || targetEl.textContent;
      if (descNode) descNode.textContent = targetEl.dataset.text || "";

      // set progress width
      const pct =
        yearNodes.length > 1 ? (idx / (yearNodes.length - 1)) * 100 : 0;
      progress.style.width = pct + "%";
    }

    // add click handlers + keyboard nav
    yearNodes.forEach((el, i) => {
      el.setAttribute("tabindex", "0");

      el.addEventListener("click", () => updateTimeline(el));

      el.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          updateTimeline(el);
        } else if (ev.key === "ArrowRight" || ev.key === "ArrowDown") {
          ev.preventDefault();
          if (i < yearNodes.length - 1) yearNodes[i + 1].focus();
        } else if (ev.key === "ArrowLeft" || ev.key === "ArrowUp") {
          ev.preventDefault();
          if (i > 0) yearNodes[i - 1].focus();
        }
      });
    });

    // initialize (pick .active or fallback to first)
    const initial = yearsContainer.querySelector("span.active") || yearNodes[0];
    updateTimeline(initial);
  });
})();
