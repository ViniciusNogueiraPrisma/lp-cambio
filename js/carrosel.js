var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper-fundos", {
  slidesPerView: "auto",
  spaceBetween: 24,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-fundos",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper-cards", {
  slidesPerView: "auto",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
});

$(document).ready(function () {
  $(".collapse").on("show.bs.collapse", function () {
    $(".collapse.show").not(this).collapse("hide");
  });
});

const accordion_item = document.querySelectorAll(".accordion_item");

accordion_item.forEach((item) => {
  const accordion_header_item = item.querySelector(".accordion_header");

  accordion_header_item.addEventListener("click", () => {
    const accordion_content_item = item.querySelector(".accordion_content");

    const item_actived = document.querySelector(".active-accordion");

    VerifyActive(item, accordion_content_item, item_actived);
  });
});

function VerifyActive(item, content, content_actived) {
  const icon_item = item.querySelector(".icon");
  const icon_item_active = document.querySelectorAll(".icon");

  icon_item_active.forEach(
    (item) => (item.innerHTML = "<i class='fa-solid fa-plus themas' ></i>")
  );

  if (content_actived) {
    content_actived.style.height = 0;
    // content.style.paddingTop = "0px";
    // content.style.paddingBottom = "0px";
    content_actived.classList.remove("active-accordion");
  }

  if (content !== content_actived) {
    icon_item.innerHTML = "<i class='fa-solid fa-minus themas' ></i>";
    content.classList.add("active-accordion");
    content.style.height = content.scrollHeight + 34 + "px";
    // content.style.paddingTop = "24px";
    // content.style.paddingBottom = "24px";
  }
}
