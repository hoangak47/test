const data = [
  {
    title: "",
    type: 2,
    data: [
      {
        id: 1,
        name: "Băng tải ngành bao bì",
        img: "../img/career/NganhBaoBi/hình ảnh ngành bao bì.jpg",
        type: 1,
      },
      {
        id: 2,
        name: "Băng tải ngành bao bì",
        img: "../img/career/NganhBaoBi/hình ảnh ngành bao bì5.jpg",
        type: 1,
      },
      {
        id: 3,
        name: "Băng tải ngành bao bì",
        img: "../img/career/NganhBaoBi/hình ảnh ngành bao bì2.jpg",
        type: 1,
      },
      {
        id: 4,
        name: "Băng tải ngành bao bì",
        img: "../img/career/NganhBaoBi/hình ảnh ngành bao bì3.jpg",
        type: 1,
      },
      {
        id: 5,
        name: "Băng tải ngành bao bì",
        img: "../img/career/NganhBaoBi/hình ảnh ngành bao bì4.jpg",
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
      "https://www.thecaovn.space/img/career/NganhBaoBi/catalo PVC, PU.pdf";
    contentModal.appendChild(embed);

    modal.classList.add("show");
  });
