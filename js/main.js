/*  ---------------------------------------------------
    Template Name: Violet 
    Description: Violet ecommerce Html Template
    Author: Colorlib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

/*  --------------------------------------------------- data -------------------------  */

const dataChatBox = [
  {
    name: "Phượng",
    title: "Mrs",
    phone: "0938 791 097",
    zalo: "0938791097",
  },
  {
    name: "Phương",
    title: "Mrs",
    phone: "0909 673 260",
    zalo: "0909673260",
  },
  {
    name: "Hà",
    title: "Mrs",
    phone: "0934 833 585",
    zalo: "0934833585",
  },
];

const dataSlider = [
  {
    img: "../img/slide/slide-1.jpg",
    title: "Thế Cao",
    content: "Truyền tải sự tín nhiệm",
  },
  {
    img: "../img/slide/slide-2.jpg",
    title: "Thế Cao",
    content: "Truyền tải sự tín nhiệm",
  },
  {
    img: "../img/slide/slide-3.jpg",
    title: "Thế Cao",
    content: "Truyền tải sự tín nhiệm",
  },
  {
    img: "../img/slide/slide-4.jpg",
    title: "Thế Cao",
    content: "Truyền tải sự tín nhiệm",
  },
  {
    img: "../img/slide/slide-5.jpg",
    title: "Thế Cao",
    content: "Truyền tải sự tín nhiệm",
  },
];
/*  --------------------------------------------------- data end -------------------------  */

("use strict");

/*-------------------
		create slide
	--------------------- */

function createSlide() {
  let renderData = "";
  dataSlider.map((item) => {
    renderData += `<div class="single-slider-item set-bg" data-setbg="${item.img}">
      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <h1>${item.title}</h1>
                  <h2>${item.content}</h2>
                  <!-- 
                  <a href="#" class="primary-btn">See More</a> -->
              </div>
          </div>
      </div>
  </div>`;
  });
  document.querySelector(".hero-slider .hero-items").innerHTML = renderData;
}

try {
  createSlide();
} catch (error) {}

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

    /*------------------
		    Product filter
	    --------------------*/
    if ($("#product-list").length > 0) {
      var containerEl = document.querySelector("#product-list");
    }
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    appendTo: ".header-section",
    allowParentLinks: true,
    closedSymbol: '<i class="fa fa-angle-right"></i>',
    openedSymbol: '<i class="fa fa-angle-down"></i>',
  });

  /*------------------
		Search model
	--------------------*/
  $(".search-trigger").on("click", function () {
    $(".search-model").fadeIn(400);
  });

  $(".search-close-switch").on("click", function () {
    $(".search-model").fadeOut(400, function () {
      $("#search-input").val("");
    });
  });

  /*------------------
        Carousel Slider
    --------------------*/
  $(".hero-items").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    smartSpeed: 1200,
    autoplayHoverPause: true,
    mouseDrag: false,
    autoplay: false,
  });

  /*------------------
        Carousel Slider
    --------------------*/
  $(".logo-items").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 40,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 5,
      },
    },
  });

  /*------------------
        Carousel Slider
    --------------------*/
  $(".product-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    dots: true,
    autoplay: true,
  });

  /*------------------
        Magnific Popup
    --------------------*/
  $(".pop-up").magnificPopup({
    type: "image",
  });

  /*-------------------
		Sort Select
	--------------------- */
  $(".sort").niceSelect();

  /*-------------------
		Cart Select
	--------------------- */
  $(".cart-select").niceSelect();

  /*-------------------
		Quantity change
	--------------------- */
  var proQty = $(".pro-qty");
  proQty.prepend('<span class="dec qtybtn">-</span>');
  proQty.append('<span class="inc qtybtn">+</span>');
  proQty.on("click", ".qtybtn", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.hasClass("inc")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  /*-------------------
		Radio Btn
	--------------------- */
  $(".shipping-info .cs-item label").on("click", function () {
    $(".shipping-info .cs-item label").removeClass("active");
    $(this).addClass("active");
  });

  $(".checkout-form .diff-addr label").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".payment-method ul li label").on("click", function () {
    $(this).toggleClass("active");
  });
})(jQuery);

try {
  document.querySelector(".show-more").addEventListener("click", function () {
    document.querySelector(".section-detail").classList.toggle("show");
    if (document.querySelector(".section-detail").classList.contains("show")) {
      this.innerHTML = "Thu gọn";
    } else {
      this.innerHTML = "Xem thêm";
    }
  });
} catch (error) {}

/*-------------------
		create Logo
	--------------------- */

function createLogo() {
  const logo = document.createElement("div");
  logo.classList.add("logo");
  const a = document.createElement("a");
  a.href = "./index.html";
  const img = document.createElement("img");
  img.src = "../img/logo.png";
  img.alt = "";
  a.appendChild(img);
  logo.appendChild(a);
  document.querySelector(".slicknav_menu").appendChild(logo);
}

const chatBoxTitle = document.querySelector(".chat-box-title");
const chatBox = document.querySelector(".chat-box");
const chatBoxContent = document.querySelector(".chat-box-content");

/*-------------------
		open Chatbox
	--------------------- */

function openChatbox() {
  chatBoxTitle.addEventListener("click", function () {
    chatBoxTitle.classList.add("full-width");
    chatBoxContent.classList.add("show");
    chatBox.classList.add("show");
    document.querySelector(".chat-box .chat-box-title h5").innerText =
      "Chăm Sóc Khách Hàng";
  });
}

/*-------------------
		close Chatbox
	--------------------- */
function closeChatbox() {
  document
    .querySelector(".chat-box-close")
    .addEventListener("click", function () {
      chatBoxTitle.classList.remove("full-width");
      chatBoxContent.classList.remove("show");
      chatBox.classList.remove("show");
      console.log(document.querySelector(".chat-box .chat-box-title h5"));
      document.querySelector(".chat-box .chat-box-title h5").innerText = "CSKH";
    });
}

/*-------------------
		pressKey
	--------------------- */

function pressKey(e) {
  if (e.keyCode === 27) {
    document.querySelector(".modal").classList.remove("show");
    document.querySelector(".col-product-image").remove();
    document.querySelector(".details-product").remove();
  }
}

/*-------------------
    load Data
--------------------- */
function loadMenuMini(number = null) {
  const ul = document.querySelector(".product-filter-menu");
  let as = "";

  let array = "";
  data[0].menu
    ? data[0].menu.map((item, index) => {
        array = data[0].menu.filter((item) => {
          return item.parentId === number;
        });

        if (number || number === 0) {
          if (item.parentId === number) {
            return (as += `<li data-index="${item.id - 1}" data-filter=${
              item.parentId
            }>${item.title} </li>`);
          } else {
            return (as += `<li style="display: none" data-index="${item.id}" data-filter=${item.parentId}>${item.title}</li>`);
          }
        } else {
          return (as += `<li data-index="${item.id}" >${item.title} </li>`);
        }
      })
    : "";

  if (array.length > 1) {
    ul.innerHTML = `<li class="active" data-filter="*" data-index="*">Tất cả</li> ${as}`;
  } else if (array.length === 1) {
    ul.innerHTML = `<li class="active" style="visibility: hidden" data-filter="*" data-index="*">Tất cả</li>`;
  } else {
    ul.innerHTML = `${as}`;
    try {
      document
        .querySelector(".product-filter-menu li:nth-child(1)")
        .classList.add("active");
    } catch (error) {}
  }

  document.querySelectorAll(".product-filter-menu li").forEach((items) => {
    items.addEventListener("click", (e) => {
      document.querySelectorAll(".product-filter-menu li").forEach((item) => {
        item.classList.remove("active");
      });
      items.classList.add("active");

      document.querySelectorAll(".product-list .all").forEach((item) => {
        item.style.display = "none";
      });
      document.querySelectorAll(".product-list .XN").forEach((item) => {
        item.style.display = "none";
      });

      switch (items.dataset.index) {
        case "0":
          document
            .querySelectorAll(".product-list .all.TD-PVC")
            .forEach((item) => {
              item.style.display = "block";
            });
          break;
        case "1":
          document
            .querySelectorAll(".product-list .all.CG-PVC")
            .forEach((item) => {
              item.style.display = "block";
            });
          break;
        case "2":
          document
            .querySelectorAll(".product-list .all.CD-PVC")
            .forEach((item) => {
              item.style.display = "block";
            });
          break;
        case "3":
          document
            .querySelectorAll(".product-list .all.DB-PVC")
            .forEach((item) => {
              item.style.display = "block";
            });
          break;
        case "4":
          document
            .querySelectorAll(".product-list .all.TD-PU")
            .forEach((item) => {
              item.style.display = "block";
            });
          break;
        case "5":
          document
            .querySelectorAll(".product-list .all.KTD-PU")
            .forEach((item) => {
              item.style.display = "block";
            });
          break;
        case "8":
          document.querySelectorAll(".product-list .XN-TD").forEach((item) => {
            item.style.display = "block";
          });
          break;
        case "9":
          document.querySelectorAll(".product-list .XN-DA").forEach((item) => {
            item.style.display = "block";
          });
        case "*":
          if (number === 0) {
            document
              .querySelectorAll(".product-list .all.PVC")
              .forEach((item) => {
                item.style.display = "block";
              });
          } else if (number === 1) {
            document
              .querySelectorAll(".product-list .all.PU")
              .forEach((item) => {
                item.style.display = "block";
              });
          } else {
            document
              .querySelectorAll(".product-list .all.TPU")
              .forEach((item) => {
                item.style.display = "block";
              });
          }
          break;
        default:
          document.querySelectorAll(".product-list .all").forEach((item) => {
            item.style.display = "block";
          });
          break;
      }
    });
  });
}

/*-------------------
    Load Detail Product
--------------------- */
function loadDetailProduct(index, item, items, divDetailProduct) {
  divDetailProduct.innerHTML += `<div data-index="${index}" class="col-12 details-product-suggest ${
    index + 1 === item.id ? "active" : ""
  }  ">
  <h4 class="">${items.name}</h4>
  <ul class="">
  ${items.material ? `<li>Chất liệu: ${items.material}</li>` : ""}
  ${items.thickness ? `<li>Độ dày: ${items.thickness}</li> ` : ""}
  ${items.width ? `<li>Chiều ngang: ${items.width}</li>` : ""}
  ${items.P ? `<li>P: ${items.P}</li>` : ""}
  ${items.H ? `<li>H: ${items.H}</li>` : ""}
  ${items.Ht ? `<li>Ht: ${items.Ht}</li>` : ""}
  ${items.W ? `<li>W: ${items.W}</li>` : ""}
  ${items.video ? `<li>${items.video}</li>` : ""}
  </ul>
</div>`;
}

/*-------------------
		load Data Product
	--------------------- */

function loadDataProduct(data) {
  const listProduct = document.querySelector(".product-list");
  const h2 = document.createElement("h2");
  const modal = document.querySelector(".modal");

  h2.classList.add("col-12");
  h2.classList.add("text-center");
  h2.classList.add("product-list-title");
  h2.innerHTML = data[0].title;
  listProduct.appendChild(h2);

  data[0].data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("col-6");
    div.classList.add("col-lg-3");
    if (item.productTypeID || item.productTypeID === 0) {
      div.classList.add("all");
      div.classList.add(
        item.productTypeID !== undefined || item.productTypeID !== null
          ? item.productTypeID === 0
            ? "PVC"
            : item.productTypeID === 1
            ? "PU"
            : "TPU"
          : ""
      );

      div.classList.add(
        item.productTypeID !== undefined || item.productTypeID !== null
          ? item.productTypeID === 0
            ? item.parentId === 0
              ? "TD-PVC"
              : item.parentId === 1
              ? "CG-PVC"
              : item.parentId === 2
              ? "CD-PVC"
              : "DB-PVC"
            : item.productTypeID === 1
            ? item.parentId === 4
              ? "TD-PU"
              : "KTD-PU"
            : "TPU"
          : ""
      );
    } else {
      if (data[0].type === 2 && data[0].product === "XN") {
        div.classList.add("XN");
        div.classList.add(item.parentId === 8 ? "XN-TD" : "XN-DA");
      }
    }

    div.innerHTML = `<div class="single-product-item"   >
      <figure>
          <img src="${item.img}" alt="">
      </figure>
      <div class="product-text">
          <h6>${item.name}</h6>
      </div>
  </div>`;
    listProduct.appendChild(div);

    if (document.querySelectorAll(".product-list .XN-DA")) {
      document.querySelectorAll(".product-list .XN-DA").forEach((item) => {
        item.style.display = "none";
      });
    }

    if (item.type === 2) {
      div.addEventListener("click", () => {
        modal.classList.add("show");
        const divProductImage = document.createElement("div");
        divProductImage.classList.add("col-12");

        divProductImage.classList.add("col-lg-9");
        divProductImage.classList.add("col-product-image");

        if (item.children[0].img === undefined) {
          divProductImage.innerHTML = `<img style="display: none;" src="" alt="" class="product-image">
          <img style="width: 100%;" src="${item.children[0].img2}" alt="" class="product-image">`;
        } else if (item.children[0].img2 === undefined) {
          divProductImage.innerHTML = `<img style="width: 100%;" src="${item.children[0].img}" alt="" class="product-image">
          <img style="display: none;" src="" alt="" class="product-image">`;
        } else {
          divProductImage.innerHTML = `<img src="${item.children[0].img}" alt="" class="product-image">
          <img src="${item.children[0].img2}" alt="" class="product-image">`;
        }

        const detailProduct = document.createElement("div");
        detailProduct.classList.add("col-12");
        detailProduct.classList.add("col-lg-3");
        detailProduct.classList.add("details-product");
        detailProduct.innerHTML = `<div class="row" style="
        overflow-y: auto;">
        
        
    </div>`;
        document.querySelector(".modal .row").appendChild(divProductImage);
        document.querySelector(".modal .row").appendChild(detailProduct);

        const divDetailProduct = document.querySelector(
          ".details-product .row"
        );

        item.children.forEach((items, index) => {
          divDetailProduct.innerHTML += `<div  class="col-12 details-product-suggest ${
            index === 0 ? "active" : ""
          }">
            <h4 class="">${items.name}</h4>
            <ul class="" ${
              item.children.length === 1 ? `style= "height: 100%;"` : ""
            }>
              ${items.material ? `<li>Chất liệu: ${items.material}</li>` : ""}
              ${items.thickness ? `<li>Độ dày: ${items.thickness}</li> ` : ""}
              ${items.width ? `<li>Chiều ngang: ${items.width}</li>` : ""}
              ${items.detail ? `<li>${items.detail}</li>` : ""}
              ${items.P ? `<li>P: ${items.P}</li>` : ""}
              ${items.H ? `<li>H: ${items.H}</li>` : ""}
              ${items.Ht ? `<li>Ht: ${items.Ht}</li>` : ""}
              ${items.W ? `<li>W: ${items.W}</li>` : ""}
              ${items.video ? `<li>${items.video}</li>` : ""}

            </ul>
        </div>`;
        });

        const allProduct = document.querySelectorAll(
          ".details-product-suggest"
        );
        allProduct.forEach((items, index) => {
          items.addEventListener("click", () => {
            allProduct.forEach((items) => {
              items.classList.remove("active");
            });
            items.classList.add("active");
            const img = document.querySelector(".product-image");
            const img2 = document.querySelector(".product-image:nth-child(2)");

            if (item.children[index].img === undefined) {
              img.style.display = "none";
              img2.style.display = "inline-block";

              img2.style.width = "100%";

              img2.src = item.children[index].img2;
            } else if (item.children[index].img2 === undefined) {
              img.style.display = "inline-block";
              img2.style.display = "none";

              img.style.width = "100%";

              img.src = item.children[index].img;
            } else {
              img.style.display = "inline-block";
              img2.style.display = "inline-block";

              img.style.width = "49%";
              img2.style.width = "49%";

              img.src = item.children[index].img;
              img2.src = item.children[index].img2;
            }
          });
        });
      });
    } else {
      div.addEventListener("click", () => {
        modal.classList.add("show");
        const divProductImage = document.createElement("div");
        divProductImage.classList.add("col-12");

        divProductImage.classList.add("col-lg-9");
        divProductImage.classList.add("col-product-image");
        divProductImage.innerHTML = `<img style="width: 100%;" src="${item.img}" alt="" class="product-image">`;

        const detailProduct = document.createElement("div");
        detailProduct.classList.add("col-12");
        detailProduct.classList.add("col-lg-3");
        detailProduct.classList.add("details-product");
        detailProduct.innerHTML = `<div class="row" style="
        overflow-y: auto;">
        
        
    </div>`;

        document.querySelector(".modal .row").appendChild(divProductImage);
        document.querySelector(".modal .row").appendChild(detailProduct);

        const divDetailProduct = document.querySelector(
          ".details-product .row"
        );

        if (
          data[0].type === 2 &&
          document.querySelector(
            ".product-filter .product-controls li.product--controls-tab.active"
          )
        ) {
          const indexDataset = document.querySelector(
            ".product-filter-menu li.active"
          ).dataset.index;

          const indexControlTab = document.querySelector(
            ".product-filter .product-controls li.product--controls-tab.active"
          ).dataset.index;

          data[0].data.forEach((items, index) => {
            if (indexDataset === "*") {
              if (items.productTypeID === parseInt(indexControlTab)) {
                loadDetailProduct(index, item, items, divDetailProduct);
              }
            }
            if (items.parentId === parseInt(indexDataset)) {
              loadDetailProduct(index, item, items, divDetailProduct);
            }
          });
        } else {
          data[0].data.forEach((items, index) => {
            if (items.type === 1) {
              if (document.querySelector(".product-filter-menu li.active")) {
                if (
                  parseInt(
                    document.querySelector(".product-filter-menu li.active")
                      .dataset.index
                  ) === items.parentId
                ) {
                  loadDetailProduct(index, item, items, divDetailProduct);
                }
              } else {
                loadDetailProduct(index, item, items, divDetailProduct);
              }
            }
          });
        }

        document.querySelector(".details-product").scrollTop =
          document.querySelector(".details-product-suggest.active").offsetTop;

        const allProduct = document.querySelectorAll(
          ".details-product-suggest"
        );
        allProduct.forEach((items, index) => {
          items.addEventListener("click", () => {
            allProduct.forEach((items) => {
              items.classList.remove("active");
            });
            items.classList.add("active");
            const img = document.querySelector(".product-image");
            img.src = data[0].data[items.dataset.index].img;
          });
        });
      });
    }
  });

  document.querySelectorAll(".product-list .all.PVC").forEach((item) => {
    item.style.display = "block";
  });
}

/*-------------------
		click Outside CloseModal
	--------------------- */

function clickOutsideCloseModal() {
  document.querySelector(".modal").addEventListener("click", function (e) {
    if (!e.target.closest(".modal-content")) {
      document.querySelector(".modal").classList.remove("show");
      try {
        document.querySelector("embed").remove();
      } catch (error) {}
      try {
        document.querySelector(".details-product").remove();
        document.querySelector(".col-product-image").remove();
      } catch (error) {}
    }
  });
}

/*-------------------
		close Outside ChatBox
	--------------------- */

function closeOutsideChatBox(e) {
  document.querySelector("body").addEventListener("click", function (e) {
    if (!e.target.closest(".chat-box")) {
      chatBoxTitle.classList.remove("full-width");
      chatBoxContent.classList.remove("show");
      chatBox.classList.remove("show");
      document.querySelector(".chat-box .chat-box-title h5").innerText = "CSKH";
    }
  });
}

/*-------------------
		create ChatBox
	--------------------- */

function createChatBox() {
  let renderChatBox = "";
  dataChatBox.map((item) => {
    renderChatBox += `<li>
    <div class="chat-box-avatar">
        <svg class="chat-box-avatar" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 2500 2372"
            style="enable-background:new 0 0 2500 2372;" xml:space="preserve">
            <path class="st0" d="M566.4,1939.8c-8.3-3.7-14.4-7.9-4.6-16.2c6-4.6,12.5-8.8,19-13c60.7-39.4,117.7-82.5,155.3-146
c31.5-52.8,26.4-83.9-13-122.8C503.3,1422,406.9,1159.2,455.1,848.7c27.3-175.2,107.5-326.8,224.3-458.4
c70.5-79.7,154.3-144.2,246.1-197.9c5.6-3.2,13.4-4.2,14.4-12.5c-1.9-4.6-5.1-3.2-7.9-3.2c-156.2,0-312.4-3.2-468.1,0.9
c-149.3,4.6-278.1,120-277.6,285.5c0.9,483.4,0,966.9,0,1450.8c0,150.2,114.5,275.8,264.2,281.4c126.5,5.1,253.1,0.9,380.1,0.5
c9.3,0.5,18.5,0.9,27.8,0.9h669.3c166.9,0,333.7,0.9,500.6,0c154.8,0,280.4-125.1,280.4-279.5v-2.8v-271.2c0-6.5,2.3-13.4-1.9-20.4
c-8.3,0.5-11.6,7.4-16.2,12.1c-89.9,90.4-196.1,163.2-312.4,214.6c-285.1,125.6-575.2,134.4-869.5,33.4
c-25.5-9.3-53.3-10.2-79.7-3.7c-38.9,9.7-77.4,21.3-115.9,32.9C800,1947.2,684.5,1962.9,566.4,1939.8L566.4,1939.8z M902.4,1158.7
c7.9-10.2,12.1-16.2,16.7-22.2c60.7-76.9,121.4-153.9,182.2-231.3c17.6-22.2,35.2-45,46.4-71.8c13-30.6-0.9-59.3-32.4-70.5
c-13.9-4.2-28.7-6-43.6-5.1c-82.5-0.5-165.5-0.5-248,0c-11.6,0-23.2,1.4-34.3,4.2c-26,6.5-41.7,32.9-35.2,59.3
c4.6,17.6,18.5,31.5,36.2,35.7c11.1,2.8,22.7,4.2,34.3,3.7c50.1,0.5,100.6,0,150.6,0.5c5.6,0,12.5-3.7,16.7,4.6
c-4.2,5.6-8.3,11.1-12.5,16.2c-71.8,90.8-143.2,182.2-215.1,273c-17.6,22.7-26.9,47.7-13.9,75.6s39.4,32.9,66.3,34.8
c21.3,1.4,43.1,0.5,64.9,0.5c75.1,0,149.7,0.5,224.8-0.5c39.9-0.5,61.2-24.6,57-61.6c-3.2-29.2-23.2-44.5-60.3-45
C1037.7,1158.3,972.4,1158.7,902.4,1158.7L902.4,1158.7z M1440.1,914.9c-57.9-50.5-121.9-53.8-184.5-16.7
c-76,44.5-103.8,117.3-94.6,201.6c8.8,78.8,43.1,143.2,125.6,169.6c51.4,16.7,99.2,10.7,141.4-23.6c11.1-8.8,14.4-7,22.2,2.8
c15.3,19.5,41.7,26.9,64.9,18.1c23.2-7,38.5-28.3,38.5-52.4c0.5-92.7,0.9-185.4,0-278.1c-0.5-37.1-35.2-60.7-71.4-53.3
C1462.3,887.1,1451.2,900.6,1440.1,914.9L1440.1,914.9z M1761.3,1086.9c-1.9,115.9,94.1,203.5,214.6,191.4
c110.8-11.1,182.6-94.1,178.9-211.4c-3.7-115.9-89.9-195.1-208.1-191.4C1835.9,878.8,1757.6,967.8,1761.3,1086.9z M1720.5,994.7
c0-72.8,0.5-145.1,0-217.9c0-37.1-23.6-60.3-58.9-59.8c-34.3,0.5-57,23.6-57.5,59.3c-0.5,21.8,0,43.1,0,64.9v368.5
c0,28.7,17.6,53.8,40.8,59.8c32,8.8,64.9-10.2,73.2-42.2c1.4-5.6,2.3-11.1,1.9-17.1C1721,1138.3,1720.5,1066.5,1720.5,994.7
L1720.5,994.7z" />
            <path class="st1"
                d="M830.1,2196.1c-126.5,0-253.5,4.2-380.1-0.5c-149.7-6-264.2-131.6-264.2-281.4c0-483.4,0.9-966.9,0-1450.8
c0-165.5,129.3-280.9,278.1-285.1c155.7-4.2,311.9-0.9,468.1-0.9c2.8,0,6.5-1.4,7.9,3.2c-0.9,8.3-9.3,9.3-14.4,12.5
C833.8,247,749.9,311.4,679.4,391.2c-116.3,131.6-197,282.7-224.3,458.4c-48.2,310.1,48.7,573.4,267.9,793.1
c38.9,39.4,44,70,13,122.8c-37.5,63.5-94.6,106.6-155.3,146c-6.5,3.7-13,8.3-19.5,12.5c-9.7,8.3-3.7,12.5,4.6,16.2
c1.9,4.2,4.2,7.9,7,11.6c53.3,47.3,103.8,97.8,156.2,146c24.6,22.7,49.1,46.4,72.8,70C811.5,2176.6,827.8,2179.4,830.1,2196.1z" />
            <path class="st2"
                d="M830.1,2196.1c-2.3-16.2-18.5-19-28.3-28.7c-23.6-24.1-48.2-47.3-72.8-70c-52.4-48.2-102.9-98.7-156.2-146
c-2.8-3.7-5.1-7.4-7-11.6c118.2,23.2,233.6,7.4,347.2-27.3c38.5-11.6,76.9-23.2,115.9-32.9c26.4-7,54.2-5.6,79.7,3.7
c293.9,101,584,91.8,869.5-33.4c116.3-51.4,222.5-123.8,312.4-214.1c4.6-4.6,7.9-11.6,16.2-12.1c4.2,6.5,1.9,13.4,1.9,20.4v271.2
c0.9,154.8-123.3,280.9-278.1,282.3h-2.3c-166.9,0.9-333.7,0-500.6,0H857.9C848.6,2196.5,839.4,2196.1,830.1,2196.1L830.1,2196.1z" />
            <path class="st1" d="M902.4,1158.7c70,0,135.8-0.5,201.2,0c36.6,0.5,56.5,15.8,60.3,45c4.2,36.6-17.1,61.2-57,61.6
c-75.1,0.9-149.7,0.5-224.8,0.5c-21.8,0-43.1,0.9-64.9-0.5c-26.9-1.4-53.3-7-66.3-34.8c-13-27.8-3.7-52.8,13.9-75.6
c71.4-90.8,143.2-182.2,215.1-273c4.2-5.6,8.3-11.1,12.5-16.2c-4.6-7.9-11.1-4.2-16.7-4.6c-50.1-0.5-100.6,0-150.6-0.5
c-11.6,0-23.2-1.4-34.3-3.7c-26.4-6-42.6-32.4-36.6-58.4c4.2-17.6,18.1-32,35.7-36.2c11.1-2.8,22.7-4.2,34.3-4.2
c82.5-0.5,165.5-0.5,248,0c14.8-0.5,29.2,1.4,43.6,5.1c31.5,10.7,45,39.9,32.4,70.5c-11.1,26.4-28.7,49.1-46.4,71.8
c-60.7,77.4-121.4,154.3-182.2,230.8C914.4,1142.5,909.8,1148.5,902.4,1158.7L902.4,1158.7z" />
            <path class="st1" d="M1440.1,914.9c11.1-14.4,22.7-27.8,41.7-31.5c36.6-7.4,70.9,16.2,71.4,53.3c1.4,92.7,0.9,185.4,0,278.1
c0,24.1-15.8,45.4-38.5,52.4c-23.2,8.8-49.6,1.9-64.9-18.1c-7.9-9.7-11.1-11.6-22.2-2.8c-42.2,34.3-89.9,40.3-141.4,23.6
c-82.5-26.9-116.3-91.3-125.6-169.6c-9.7-84.8,18.5-157.1,94.6-201.6C1318.2,861.2,1382.1,864.4,1440.1,914.9L1440.1,914.9z
M1276,1084.1c0.9,20.4,7.4,39.9,19.5,56.1c25,33.4,72.8,40.3,106.6,15.3c5.6-4.2,10.7-9.3,15.3-15.3c26-35.2,26-93.2,0-128.4
c-13-18.1-33.4-28.7-55.2-29.2C1311.2,979.4,1275.5,1018.8,1276,1084.1z M1761.3,1086.9c-3.7-119.1,74.6-208.1,185.9-211.4
c118.2-3.7,204.4,75.6,208.1,191.4c3.7,117.3-68.1,200.2-178.9,211.4C1855.4,1290.4,1759.4,1202.8,1761.3,1086.9L1761.3,1086.9z
M1877.6,1075.8c-0.9,23.2,6,45.9,19.9,64.9c25.5,33.4,73.2,39.9,106.6,13.9c5.1-3.7,9.3-8.3,13.4-13c26.9-35.2,26.9-94.6,0.5-129.8
c-13-17.6-33.4-28.7-55.2-29.2C1912.9,979.8,1877.6,1017.8,1877.6,1075.8z M1720.5,994.7c0,71.8,0.5,143.7,0,215.5
c0.5,32.9-25.5,60.3-58.4,61.2c-5.6,0-11.6-0.5-17.2-1.9c-23.2-6-40.8-30.6-40.8-59.8V841.2c0-21.8-0.5-43.1,0-64.9
c0.5-35.7,23.2-58.9,57.5-58.9c35.2-0.5,58.9,22.7,58.9,59.8C1721,849.6,1720.5,922.4,1720.5,994.7z" />
            <path class="st0" d="M1276,1084.1c-0.5-65.4,35.2-104.8,85.7-102c21.8,0.9,42.2,11.6,55.2,29.7c26,34.8,26,93.2,0,128.4
c-25,33.4-72.8,40.3-106.6,15.3c-5.6-4.2-10.7-9.3-15.3-15.3C1283.4,1124,1276.9,1104.5,1276,1084.1L1276,1084.1z M1877.6,1075.8
c0-57.5,35.2-95.9,85.3-93.2c21.8,0.5,42.2,11.6,55.2,29.2c26.4,35.2,26.4,95-0.5,129.8c-26,32.9-74.2,38.5-107.1,12.5
c-5.1-3.7-9.3-8.3-13-13.4C1883.7,1121.7,1877.2,1099,1877.6,1075.8z" />
            <path class="st3" d="M489.4,178.9h1520.8c166.4,0,301.3,134.9,301.3,301.3v1404.4c0,166.4-134.9,301.3-301.3,301.3H489.4
c-166.4,0-301.3-134.9-301.3-301.3V480.2C188.1,313.8,323,178.9,489.4,178.9z" />
        </svg>
    </div>
    <div class="chat-box-message">
        <a href="https://zalo.me/${item.zalo}" target="_blank" title="${item.name}">
            <p>${item.phone} - ${item.title}. ${item.name}</p>
        </a>
    </div>
</li>`;
  });

  document.querySelector(".chat-box-content ul").innerHTML = renderChatBox;
}

/*--------------------
click Menu Mini
--------------------*/

try {
  createLogo();
  createChatBox();

  if (document.querySelector(".modal")) {
    clickOutsideCloseModal();
    document.addEventListener("keydown", pressKey);
  }

  if (document.querySelector(".chat-box")) {
    closeOutsideChatBox();
    openChatbox();

    closeChatbox();
  }
} catch (error) {}
