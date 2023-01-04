const data = [
  {
    title: "",
    type: 2,
    data: [
      {
        id: 1,
        name: "Băng tải ngành gỗ",
        img: "../img/career/NganhGo/Băng tải ngành gỗ.jpg",
        type: 1,
      },
      {
        id: 2,
        name: "Băng tải máy chà nhám",
        img: "../img/career/NganhGo/Băng tải máy chà nhám.jpg",
        type: 1,
      },
      {
        id: 3,
        name: "Băng tải ngành gỗ",
        img: "../img/career/NganhGo/Băng tải ngành gỗ 2.jpg",
        type: 1,
      },
      {
        id: 4,
        name: "Băng tải ngành gỗ",
        img: "../img/career/NganhGo/Băng tải ngành gỗ 3.jpg",
        type: 1,
      },
      {
        id: 5,
        name: "Băng tải ngành gỗ",
        img: "../img/career/NganhGo/Băng tải ngành gỗ 4.jpg",
        type: 1,
      },
      {
        id: 6,
        name: "Băng tải ngành gỗ",
        img: "../img/career/NganhGo/Băng tải ngành gỗ5.jpg",
        type: 1,
      },
      {
        id: 7,
        name: "Băng tải ngành gỗ",
        img: "../img/career/NganhGo/Băng tải ngành gỗ6.jpg",
        type: 1,
      },
      {
        id: 8,
        name: "Băng tải ngành gỗ",
        img: "../img/career/NganhGo/Băng tải ngành gỗ7.jpg",
        type: 1,
      },
      {
        id: 9,
        name: "Băng tải gai",
        img: "../img/career/NganhGo/Băng tải gai.jpg",
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
      "https://www.thecaovn.space/img/career/NganhGo/catalo ngành gỗ.pdf";
    contentModal.appendChild(embed);

    modal.classList.add("show");
  });
