const datas = [
  {
    title: "Băng tải Xích nhựa",
    type: 1,
    data: [],
  },
];

const data = [
  {
    title: "Sản phẩm PVC",
    type: 2,
    menu: [
      {
        id: 8,
        title: "Thông dụng",
      },
      {
        id: 9,
        title: "Dự án",
      },
    ],
    data: [
      {
        type: 1,
        parentId: 8,
        id: 1,
        name: "2500A",
        img: "./img/products/XichNhua/2500A.jpg",
        key: "2500A",
      },
      {
        id: 2,
        parentId: 8,
        name: "2500B",
        img: "./img/products/XichNhua/2500B.jpg",
        key: "2500B",

        type: 1,
      },
      {
        id: 3,
        parentId: 8,
        name: "HS100A",
        img: "./img/products/XichNhua/HS100A.jpg",
        key: "HS100A",
        type: 1,
      },
      {
        id: 4,
        parentId: 8,
        name: "HS100B",
        img: "./img/products/XichNhua/HS100B.jpg",
        key: "HS100B",

        type: 1,
      },
      {
        id: 5,
        parentId: 8,
        name: "HS400B",
        img: "./img/products/XichNhua/HS400B.jpg",
        key: "HS400B",

        type: 1,
      },
      {
        id: 6,
        parentId: 8,
        name: "HS880",
        img: "./img/products/XichNhua/HS880.jpg",
        key: "HS880",

        type: 1,
      },
      {
        id: 7,
        parentId: 8,
        name: "LF820-K450 (Habasit / Hong's Belt)",
        img: "./img/products/XichNhua/LF820-K450 (Habasit).jpg",
        key: "LF820-K450 (Habasit / Hong's Belt)",

        type: 1,
      },
      {
        id: 8,
        parentId: 8,
        name: "Xích Inox",
        img: "./img/products/XichNhua/XichINOX.jpg",
        key: "Xích Inox",

        type: 1,
      },
      {
        id: 9,
        parentId: 8,
        name: "Bánh răng",
        img: "./img/products/XichNhua/BanhRang.jpg",
        key: "Bánh răng",

        type: 1,
      },
      {
        id: 10,
        name: "PAT Kẹp",
        img: "./img/products/XichNhua/PAT Kẹp_1.jpg",
        key: "PAT Kẹp",

        parentId: 8,
        type: 1,
      },
      {
        id: 11,
        name: "Băng tải thực phẩm",
        img: "./img/products/XichNhua/Bangtaithucpham.jpg",
        key: "Băng tải thực phẩm",

        parentId: 9,
        type: 1,
      },
      {
        id: 12,
        name: "Băng tải bao bì",
        img: "./img/products/XichNhua/Bangtaibaobi.jpg",
        key: "Băng tải bao bì",

        parentId: 9,
        type: 1,
      },
      {
        id: 13,
        name: "Băng tải nước giải khát",
        img: "./img/products/XichNhua/Bangtainuocgiaikhat.jpg",
        key: "Băng tải nước giải khát",

        parentId: 9,
        type: 1,
      },
      {
        id: 14,
        name: "Băng tải thủy sản",
        img: "./img/products/XichNhua/Bangtaithuysan.jpg",
        key: "Băng tải thủy sản",

        parentId: 9,
        type: 1,
      },
      {
        id: 15,
        name: "Băng tải rau, củ, quả",
        img: "./img/products/XichNhua/Bantairaucuqua.jpg",
        key: "Băng tải rau, củ, quả",

        parentId: 9,
        type: 1,
      },
      {
        id: 16,
        name: "Băng tải ngành in",
        img: "./img/products/XichNhua/Bangtainganhin.jpg",
        key: "Băng tải ngành in",

        parentId: 9,
        type: 1,
      },
      {
        id: 17,
        name: "Băng tải đông lạnh",
        img: "./img/products/XichNhua/Bangtaidonglanh.jpg",
        key: "Băng tải đông lạnh",

        parentId: 9,
        type: 1,
      },
      {
        id: 18,
        name: "Băng tải Logistics",
        img: "./img/products/XichNhua/BangtaiLogistics.jpg",
        key: "Băng tải Logistics",

        parentId: 9,
        type: 1,
      },
      {
        id: 19,
        name: "Băng tải bánh kẹo",
        img: "./img/products/XichNhua/Bangtaibanhkeo.jpg",
        key: "Băng tải bánh kẹo",

        parentId: 9,
        type: 1,
      },
      {
        id: 20,
        name: "Băng tải hình chữ S",
        img: "./img/products/XichNhua/BangtaihinhchuS.jpg",
        key: "Băng tải hình chữ S",

        parentId: 9,
        type: 1,
      },
      {
        id: 21,
        name: "Băng tải cua",
        img: "./img/products/XichNhua/Bangtaicua.jpg",
        key: "Băng tải cua",

        parentId: 9,
        type: 1,
      },
      {
        id: 22,
        name: "Băng tải xoắn ốc",
        img: "./img/products/XichNhua/Bangtaixoanoc.jpg",
        key: "Băng tải xoắn ốc",

        parentId: 9,
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
