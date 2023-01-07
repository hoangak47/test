const data = [
  {
    title: "",
    type: 2,
    data: [
      {
        id: 1,
        name: "Băng tải ngành thuốc lá",
        img: "../img/career/NganhThuocLa/Băng tải ngành thuốc lá 2015.jpg",
        type: 1,
      },
      {
        id: 2,
        name: "Băng tải ngành thuốc lá",
        img: "../img/career/NganhThuocLa/Băng tải ngành thuốc lá 02.jpg",
        type: 1,
      },
      {
        id: 3,
        name: "Băng tải ngành thuốc lá",
        img: "../img/career/NganhThuocLa/Băng tải ngành thuốc lá 03.jpg",
        type: 1,
      },
      {
        id: 4,
        name: "Băng tải ngành thuốc lá",
        img: "../img/career/NganhThuocLa/Hình ảnh ngành thuốc lá.jpg",
        type: 1,
      },
      {
        id: 5,
        name: "Băng tải ngành thuốc lá",
        img: "../img/career/NganhThuocLa/Hình ảnh ngành thuốc lá2.jpg",
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
    document.querySelector(".modal-content").style.height = "100vh";
    const contentModal = document.querySelector(".modal-content .row");
    const embed = document.createElement("embed");
    embed.width = "100%";
    embed.height = "100%";
    embed.src =
      "https://drive.google.com/viewerng/viewer?embedded=true&url=https://www.thecaovn.space/img/career/NganhThuocLa/catalo ngành thuốc lá.pdf";
    contentModal.appendChild(embed);

    modal.classList.add("show");
  });
