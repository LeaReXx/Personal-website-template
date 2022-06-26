const worksMobileSelectList = $.querySelector(".mobile-select-works");
const worksMobileList = $.querySelector(".chevron-up");
const worksFilterMenu = $.querySelector(".works-filter-menu");
const filterMenuList = $.querySelectorAll(".filter-menu-list");
const filterSelectedTxt = $.querySelector(".mobile-select-works-txt");

function MobileSelectListHandler() {
  worksMobileList.classList.toggle("chevron-up");
  worksFilterMenu.classList.toggle("works-filter-menu-active");
}
worksMobileSelectList.addEventListener("click", MobileSelectListHandler);
// gallery filter for mobile
let galleryFilter = "all";
for (var i = 0; i < filterMenuList.length; i++) {
  filterMenuList[i].addEventListener("click", function () {
    filterSelectedTxt.innerHTML = this.innerHTML;
    galleryFilter = this.dataset.value;
    deafultFilterMenuColor();
    this.style.color = "var(--primary-color)";
    worksGalleryHandler();
    MobileSelectListHandler();
  });
}

// Deafult Filter Menu List Color
function deafultFilterMenuColor() {
  for (var i = 0; i < filterMenuList.length; i++) {
    filterMenuList[i].style.color = "var(--font-color)";
  }
}

// gallery array
let works_gallery = [
  {
    title: "پلنگ",
    description: "لورم ایپسوم متن ساختگی",
    path: "../img/works-animal (1).jpg",
    Group: "animal",
  },
  {
    title: "پنگوئن",
    description: "لورم ایپسوم متن ساختگی",
    path: "../img/works-animal (2).jpg",
    Group: "animal",
  },
  {
    title: "روباه",
    description: "لورم ایپسوم متن ساختگی",
    path: "../img/works-animal (3).jpg",
    Group: "animal",
  },
  {
    title: "نیسان",
    description: "لورم ایپسوم متن ساختگی",
    path: "../img/works-car (1).jpg",
    Group: "car",
  },
  {
    title: "کلاسیک",
    description: "لورم ایپسوم متن ساختگی",
    path: "../img/works-car (2).jpg",
    Group: "car",
  },
  {
    title: "فورد",
    description: "لورم ایپسوم متن ساختگی",
    path: "../img/works-car (3).jpg",
    Group: "car",
  },
  {
    title: "کوه",
    description: "لورم ایپسوم متن ساختگی",
    path: "../img/works-nature (1).jpg",
    Group: "nature",
  },
  {
    title: "جنگل برفی",
    description: "لورم ایپسوم متن ساختگی",
    path: "../img/works-nature (2).jpg",
    Group: "nature",
  },
  {
    title: "جنگل پاییزی",
    description: "لورم ایپسوم متن ساختگی",
    path: "../img/works-nature (3).jpg",
    Group: "nature",
  },
];
// filter gallery
let filtered = works_gallery;
function worksGalleryHandler() {
  filtered = [];
  works_gallery.forEach(function (images) {
    if (images.Group === galleryFilter) {
      filtered.unshift(images);
    } else if (galleryFilter === "all") {
      filtered = works_gallery;
    }
    galleryCreateHandler();
  });
}

// gallery Element Creator 
let worksFragment = $.createDocumentFragment();
let worksGallery = $.querySelector(".works-gallery");
let galleryImagesParent = $.querySelectorAll;
function galleryCreateHandler() {
  worksGallery.innerHTML = "";
  filtered.forEach(function (work) {
    let galleryImageParent, galleryImage, galleryImgs, galleryTitle, galleryDescription;

    galleryImageParent = $.createElement("div");
    galleryImageParent.classList = "gallery-image-parent";

    galleryImage = $.createElement("div");
    galleryImage.classList = "gallery-image";

    galleryImgs = $.createElement("img");
    galleryImgs.src = work.path;
    galleryImgs.alt = work.title;
    galleryImgs.classList = "gallery-imgs";
    galleryImgs.setAttribute("loading", "lazy");
    galleryImgs.addEventListener("click", function () {
      galleryImageClicked(galleryImgs);
    });

    galleryTitle = $.createElement("h3");
    galleryTitle.classList = "gallery-title";
    galleryTitle.innerHTML = work.title;

    galleryDescription = $.createElement("h4");
    galleryDescription.classList = "gallery-description";
    galleryDescription.innerHTML = work.description;

    galleryImageParent.appendChild(galleryImage);
    galleryImage.appendChild(galleryImgs);
    galleryImageParent.appendChild(galleryTitle);
    galleryImageParent.appendChild(galleryDescription);

    worksFragment.appendChild(galleryImageParent);
  });
  worksGallery.appendChild(worksFragment);
}

// gallery image modal
window.addEventListener("load", galleryCreateHandler);
let galleryModal = $.querySelector(".gallery-modal");
let galleryModalimage = $.querySelector(".gallery-modal-image");
function galleryImageClicked(galleryImgs) {
  galleryModalimage.src = galleryImgs.src;
  galleryModal.classList.add("gallery-modal-active");
}

galleryModalimage.addEventListener("click", function () {
  galleryModal.classList.remove("gallery-modal-active");
});
