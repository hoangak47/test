const data = [
  {
    title: "",
    type: 2,
    data: [
      {
        id: 1,
        name: "Chế biến thủy sản",
        img: "../img/career/NganhThuySan/Chế biến thủy sản.jpg",
        type: 1,
      },
      {
        id: 2,
        name: "Chế biến thủy sản",
        img: "../img/career/NganhThuySan/Chế biến thủy sản2.jpg",
        type: 1,
      },
      {
        id: 3,
        name: "Chế biến thủy sản",
        img: "../img/career/NganhThuySan/Chế biến thủy sản3.jpg",
        type: 1,
      },
      {
        id: 4,
        name: "Chế biến thủy sản",
        img: "../img/career/NganhThuySan/Chế biến thủy sản4.jpg",
        type: 1,
      },
      {
        id: 5,
        name: "Chế biến thủy sản",
        img: "../img/career/NganhThuySan/Chế biến thủy sản5.jpg",
        type: 1,
      },
      {
        id: 6,
        name: "Chế biến thủy sản",
        img: "../img/career/NganhThuySan/Chế biến thủy sản6.jpg",
        type: 1,
      },
      {
        id: 7,
        name: "Chế biến thủy sản",
        img: "../img/career/NganhThuySan/Chế biến thủy sản7.jpg",
        type: 1,
      },
      {
        id: 8,
        name: "Chế biến thủy sản",
        img: "../img/career/NganhThuySan/Chế biến thủy sản8.jpg",
        type: 1,
      },
    ],
  },
];

const listProduct = document.querySelector(".product-list");

const ul = document.createElement("ul");
ul.classList.add("product-filter-menu");
ul.classList.add("text-center");
listProduct.appendChild(ul);

loadDataProduct(data);

loadMenuMini();

document
  .querySelector(".catalog-download span")
  .addEventListener("click", (e) => {
    const modal = document.querySelector(".modal");
    checkScreenModal();
    const contentModal = document.querySelector(".modal-content .row");
    const embed = document.createElement("embed");
    embed.width = "100%";
    embed.height = "100%";
    embed.src =
      "https://drive.google.com/viewerng/viewer?embedded=true&url=https://www.thecaovn.space/img/career/NganhThuySan/catalo PVC, PU.pdf";
    contentModal.appendChild(embed);

    modal.classList.add("show");
  });
