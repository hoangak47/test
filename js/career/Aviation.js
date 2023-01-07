const data = [
  {
    title: "",
    type: 2,
    data: [],
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
      "https://drive.google.com/viewerng/viewer?embedded=true&url=https://www.thecaovn.space/img/career/HangKhong/catalo ngành hàng không.pdf";
    contentModal.appendChild(embed);

    modal.classList.add("show");
  });
