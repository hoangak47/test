const data = [
  {
    title: "",
    type: 2,
    data: [
      {
        id: 1,
        name: "Hình ảnh máy chạy bộ",
        img: "../img/career/NganhTheThao/hình ảnh máy chạy bộ.jpg",
        type: 1,
      },
      {
        id: 2,
        name: "Hình ảnh máy chạy bộ",
        img: "../img/career/NganhTheThao/hình ảnh máy chạy bộ2.jpg",
        type: 1,
      },
      {
        id: 3,
        name: "Hình ảnh máy chạy bộ",
        img: "../img/career/NganhTheThao/hình ảnh máy chạy bộ3.jpg",
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
      "https://drive.google.com/viewerng/viewer?embedded=true&url=https://www.thecaovn.space/img/career/NganhTheThao/catalo băng tải chạy bộ.pdf";
    contentModal.appendChild(embed);

    modal.classList.add("show");
  });
