function toggleMenu() {
  var menu = document.getElementById("navbarMenu");
  menu.classList.toggle("show");
}

function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  dropdownContent.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    arrow = button.querySelector("i.icon-arrow");
    document.getElementsByClassName("close-btn").classList.add("show");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
});

slider.addEventListener("mouseup", () => {
    isDown = false;
});

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; 
    slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; 
    slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener("touchend", () => {
    isDown = false;
});




function openModal(title) {
  var modal = document.getElementById("myModal");
  var modalTitle = document.getElementById("modalTitle");
  modalTitle.textContent = title;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function showContent(contentId, button) {
  var contents = document.getElementsByClassName("content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove("showMain");
  }

  var buttons = document.getElementsByClassName("menu-btn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  var selectedContent = document.getElementById(contentId + "Content");
  selectedContent.classList.add("showMain");

  button.classList.add("active");
}

const searchInput = document.getElementById("searchInput");
const autocompleteResults = document.getElementById("autocompleteResults");

searchInput.addEventListener("input", function () {
  const searchQuery = searchInput.value.toLowerCase();

  if (searchQuery.length >= 2) {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        const filteredProducts = products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery)
        );
        showResults(filteredProducts);
      })
      .catch((error) => console.error(error));
  } else {
    autocompleteResults.innerHTML = "";
  }
});

function showResults(results) {
  autocompleteResults.innerHTML = "";
  const list = document.createElement("ul");
  results.forEach((result) => {
    const listItem = document.createElement("li");
    listItem.classList.add("autocomplete-item");
    listItem.addEventListener("click", function () {
      searchInput.value = result.title;
      autocompleteResults.innerHTML = "";
    });

    const titleElement = document.createElement("label");
    titleElement.textContent = result.title;
    listItem.appendChild(titleElement);

    const categoryElement = document.createElement("label");
    categoryElement.textContent = result.category;
    listItem.appendChild(categoryElement);

    list.appendChild(listItem);
  });
  autocompleteResults.appendChild(list);
}

document.addEventListener("click", function (event) {
  if (
    !autocompleteResults.contains(event.target) &&
    event.target !== searchInput
  ) {
    autocompleteResults.innerHTML = "";
  }
});
