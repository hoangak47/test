const data = [
  {
    title: "Băng tải Chịu nhiệt",
    type: 1,
    data: [
      {
        id: 1,
        name: "Vải PTFE",
        img: "./img/products/ChiuNhiet/PTFE-Fabrics2-1.jpg",
        children: [
          {
            idProduct: 1,
            name: "Vải PTFE",
            img: "./img/products/ChiuNhiet/PTFE-Fabrics2-1.jpg",
            key: "Vải PTFE",
            detail:
              "Nhà cung cấp chúng tôi chọn sợi thủy tinh nhập khẩu tốt nhất làm vật liệu dệt để đan lớp phủ vải sợi thủy tinh PTFE nhựa để làm cho nó thành các độ dày, chiều rộng và màu sắc.",
          },
        ],
        type: 2,
      },
      {
        id: 2,
        name: "Băng dính PTFE",
        img: "./img/products/ChiuNhiet/PTFE-Adhesive.jpg",
        children: [
          {
            idProduct: 1,
            name: "Băng dính PTFE",
            img: "./img/products/ChiuNhiet/PTFE-Adhesive.jpg",
            key: "Băng dính PTFE",
            detail:
              "Nhà cung cấp chúng tôi sử dụng Vải PTFE chất lượng cao được xử lý bề mặt đặc biệt, sau đó phủ keo silicone & acrylic để sản xuất Keo PTFE",
          },
        ],
        type: 2,
      },
      {
        id: 3,
        name: "Đai PTFE",
        img: "./img/products/ChiuNhiet/PTFE-Belt.jpg",
        children: [
          {
            idProduct: 1,
            name: "Đai PTFE",
            img: "./img/products/ChiuNhiet/PTFE-Belt.jpg",
            key: "Đai PTFE",
            detail:
              "Nhà cung cấp chúng tôi chọn các loại vải sợi thủy tinh tốt để dệt thành hoa văn khác nhau với nhiều kích cỡ mắt lưới khác nhau và được phủ nhựa PTFE để tạo ra Đai PTFE khác biệt.",
          },
        ],
        type: 2,
      },
    ],
  },
];

loadDataProduct(data);
