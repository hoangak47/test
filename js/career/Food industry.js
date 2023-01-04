const data = [
  {
    title: "",
    type: 2,
    data: [
      {
        id: 1,
        name: "Băng tải thực phẩm",
        img: "../img/career/ThucPham/Băng tải thực phẩm.jpg",
        type: 1,
      },
      {
        id: 2,
        name: "Băng tải bánh",
        img: "../img/career/ThucPham/Băng tải bánh.jpg",
        type: 1,
      },
      {
        id: 3,
        name: "Băng tải chế biến thịt",
        img: "../img/career/ThucPham/Băng tải chế biến thịt.jpg",
        type: 1,
      },
      {
        id: 4,
        name: "Băng tải chế biến thịt",
        img: "../img/career/ThucPham/Băng tải chế biến thịt 2.jpg",
        type: 1,
      },
      {
        id: 5,
        name: "Băng tải thực phẩm",
        img: "../img/career/ThucPham/Băng tải thực phẩm 2.jpg",
        type: 1,
      },
      {
        id: 6,
        name: "Băng tải thực phẩm",
        img: "../img/career/ThucPham/Băng tải thực phẩm 3.jpg",
        type: 1,
      },
      {
        id: 7,
        name: "Băng tải thực phẩm",
        img: "../img/career/ThucPham/Băng tải thực phẩm4.jpg",
        type: 1,
      },
      {
        id: 8,
        name: "Băng tải thực phẩm",
        img: "../img/career/ThucPham/Băng tải thực phẩm5.jpg",
        type: 1,
      },
      {
        id: 9,
        name: "Băng tải bèo",
        img: "../img/career/ThucPham/Băng tải bèo.jpg",
        type: 1,
      },
      {
        id: 10,
        name: "Băng tải bèo",
        img: "../img/career/ThucPham/Băng tải bèo2.jpg",
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
      "https://www.thecaovn.space/img/career/ThucPham/catalo ngành thực phẩm.pdf";
    contentModal.appendChild(embed);

    modal.classList.add("show");
  });
