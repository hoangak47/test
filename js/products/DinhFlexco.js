const data = [
  {
    title: "Sản phẩm Đinh Flexco",
    type: 1,
    data: [
      {
        id: 1,
        name: "Máy đóng đinh.",
        img: "./img/products/Dinh/thuong.JPG",
        children: [
          {
            idProduct: 1,
            name: "Máy đóng đinh.",
            img: "./img/products/Dinh/thuong.JPG",
            key: "Máy đóng đinh.",
            characteristics: [
              {
                color: "Đen",
                Specifications: "Máy đóng đinh thường",
              },
            ],
          },
        ],
        type: 2,
      },
      {
        id: 2,
        name: "Máy đóng đinh (bản nâng cấp).",
        img: "./img/products/Dinh/maynangcap.JPG",
        children: [
          {
            idProduct: 1,
            name: "Máy đóng đinh (bản nâng cấp).",
            img: "./img/products/Dinh/maynangcap.JPG",
            key: "Máy đóng đinh (bản nâng cấp).",
            characteristics: [
              {
                color: "Đen",
                Specifications: "Máy đóng đinh thường",
              },
            ],
          },
        ],
        type: 2,
      },
      {
        id: 7,
        name: "Bộ đóng đinh bản lề.",
        img: "./img/products/Dinh/BoDongDinhBanLe.jpg",
        children: [
          {
            idProduct: 1,
            name: "Bộ đóng đinh bản lề.",
            img: "./img/products/Dinh/BoDongDinhBanLe.jpg",
            key: "Bộ đóng đinh bản lề.",
            characteristics: [
              {
                color: "Đen",
                Specifications: "Máy đóng đinh thường",
              },
            ],
          },
        ],
        type: 2,
      },
      {
        id: 3,
        name: "Đinh xương cá.",
        img: "./img/products/Dinh/xuongca.jpg",
        children: [
          {
            idProduct: 1,
            name: "Đinh xương cá.",
            img: "./img/products/Dinh/xuongca.jpg",
            key: "Đinh xương cá.",
            characteristics: [
              {
                color: "Đen",
                Specifications: "Đinh xương cá.",
              },
            ],
          },
        ],
        type: 2,
      },
      {
        id: 4,
        name: "Đinh dẹp nối băng tải.",
        img: "./img/products/Dinh/dinhdepnoibangtai.jpg",
        children: [
          {
            idProduct: 1,
            name: "Đinh dẹp nối băng tải.",
            img: "./img/products/Dinh/dinhdepnoibangtai.jpg",
            key: "Đinh dẹp nối băng tải.",
            characteristics: [
              {
                color: "Đen",
                Specifications: "Đinh dẹp nối băng tải.",
              },
            ],
          },
        ],
        type: 2,
      },
      {
        id: 5,
        name: "Đinh bản lề RS125.",
        img: "./img/products/Dinh/banlers125.jpg",
        children: [
          {
            idProduct: 1,
            name: "Đinh bản lề RS125.",
            img: "./img/products/Dinh/banlers125.jpg",
            key: "Đinh bản lề RS125.",
            characteristics: [
              {
                color: "Đen",
                Specifications: "Đinh bản lề RS125.",
              },
            ],
          },
        ],
        type: 2,
      },
      {
        id: 6,
        name: "Đinh bản lề nhựa.",
        img: "./img/products/Dinh/banlenhua4.jpg",
        children: [
          {
            idProduct: 1,
            name: "Đinh bản lề nhựa.",
            img: "./img/products/Dinh/banlenhua4.jpg",
            key: "Đinh bản lề nhựa.",
            characteristics: [
              {
                color: "Đen",
                Specifications: "Đinh bản lề nhựa.",
              },
            ],
          },
        ],
        type: 2,
      },
      {
        id: 7,
        name: "Đinh nhựa xanh.",
        img: "./img/products/Dinh/DinhNhuaXanh.png",
        children: [
          {
            idProduct: 1,
            name: "Đinh nhựa xanh.",
            img: "./img/products/Dinh/DinhNhuaXanh.png",
            key: "Đinh bản lề nhựa.",
            characteristics: [
              {
                color: "Đen",
                Specifications: "Đinh nhựa xanh",
              },
            ],
          },
        ],
        type: 2,
      },
    ],
  },
];

loadDataProduct(data);
