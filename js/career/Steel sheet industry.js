const data = [
  {
    title: "",
    type: 2,
    data: [
      {
        id: 1,
        name: "Băng tải cuốn tôn mặt vân",
        img: "../img/career/NganhTonThep/Băng tải cuốn tôn mặt vân.jpg",
        type: 1,
      },
      {
        id: 2,
        name: "Băng tải cuốn tôn mặt láng",
        img: "../img/career/NganhTonThep/Băng tải cuốn tôn mặt láng.jpg",
        type: 1,
      },
      {
        id: 3,
        name: "Băng tải được lắp máy cuốn tôn",
        img: "../img/career/NganhTonThep/Băng tải được lắp máy cuốn tôn.jpg",
        type: 1,
      },
      {
        id: 4,
        name: "Băng tải lắp máy cuốn tôn",
        img: "../img/career/NganhTonThep/Băng tải lắp máy cuốn tôn.jpg",
        type: 1,
      },
      {
        id: 5,
        name: "Băng tải cuốn tôn",
        img: "../img/career/NganhTonThep/Băng tải cuốn tôn.jpg",
        type: 1,
      },
      {
        id: 6,
        name: "Băng tải cuốn tôn",
        img: "../img/career/NganhTonThep/Băng tải cuốn tôn2.jpg",
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
      "https://drive.google.com/viewerng/viewer?embedded=true&url=https://www.thecaovn.space/img/career/NganhTonThep/Băng tải cuốn tôn.pdf";
    contentModal.appendChild(embed);

    modal.classList.add("show");
  });
