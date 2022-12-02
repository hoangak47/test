/*  ---------------------------------------------------
    Template Name: Violet 
    Description: Violet ecommerce Html Template
    Author: Colorlib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

"use strict";

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

/*  ---------------
    tab
----------------- */

const dataTab = [
  {
    id: 0,
    title: "PVC",
    content: `<span><strong>Băng tải PVC</strong> là loại băng tải tiêu chuẩn trong mọi ngành nghề
    và cả
    ngành thực phẩm có
    thể được sử dụng cho các ứng dụng cơ bản trong chế biến và xử lý thực phẩm. <br><br>

    <strong>PVC</strong> đã phát triển trở thành loại nhựa được sản xuất rộng rãi thứ ba,
    được biết đến với
    độ bền và dễ sử dụng.<br><br>

    Băng tải bọc <strong>PVC</strong> phù hợp nhất cho việc xử lý vật liệu, ứng dụng sản
    xuất bánh mì và chế
    biến thịt, cá và sữa.<br><br>

    Với khả năng chống mài mòn hạn chế và khả năng chống dung môi, dầu và mỡ hạn chế, dây
    đai <strong>PVC</strong> phù hợp nhất để chế biến rau quả và các hoạt động đơn giản hơn
    với các yêu cầu
    đặc biệt hạn chế.<br><br>
    Những đai chống tĩnh điện này cung cấp khả năng chống hóa chất tốt, đồng thời có khả
    năng chống nước nóng và hơi nước. Dựa trên nhu cầu cụ thể và các nhà sản xuất băng tải,
    cũng có các mô hình chống cháy có sẵn.<br><br>

    Đối với những người không biết về thông số kỹ thuật để chế biến thực phẩm của họ, băng
    tải <strong>PVC</strong> là sự lựa chọn đáng tin cậy và có giá thành ưu đãi so với các
    loại băng tải khác
    như PU VÀ TPU
</span>`,
  },
  {
    id: 1,
    title: "PU",
    content: `<span><strong>Băng tải PU</strong> còn được gọi là băng tải polyurethane, nó rất giống với
    băng tải PVC, cả
    hai đều là băng tải công nghiệp. Nhiều người không biết nên chọn dây đai PU hay dây đai
    PVC. Trên thực tế, điểm khác biệt chính của chúng nằm ở chất liệu. Không có vấn đề tốt
    hay xấu, chỉ là nó có phù hợp với ngành công nghiệp và thiết bị ban đầu hay không. Nếu
    bạn đang vận chuyển thực phẩm, như bánh kẹo, mì, thịt, hải sản, đồ nướng,… thì sự lựa
    chọn hàng đầu là <strong>băng tải PU</strong>. những ưu điểm của dây đai PU so với dây
    đai PVC. <br><br>
    <strong>Không có mùi</strong><br>
    Dây đai PVC có mùi nặng. còn <strong>băng tải PU</strong> được làm bằng PU
    (polyurethane) như bề mặt cao
    su của nó, nó không có mùi đặc biệt. Khi tiếp xúc với thực phẩm, nó sẽ không tạo ra bất
    kỳ mùi đặc biệt nào.<br><br>

    <strong>Tiếp xúc trực tiếp với thức ăn</strong><br>
    <strong>Băng tải PU</strong> có độ trong suốt và sạch sẽ, phù hợp với chứng nhận cấp
    thực phẩm của FDA,
    có thể tiếp xúc trực tiếp với thực phẩm, có khả năng chống thấm dầu, rửa, cắt.<br><br>

    <strong>Xanh (Bảo vệ môi trường)</strong><br>
    <strong>Băng tải PU</strong> thân thiện với môi trường hơn băng tải PVC, vì PU
    (polyurethane) là vật liệu
    có thể bị phân hủy bởi tự nhiên nên còn được gọi là vật liệu xanh.<br><br>
    <strong>Bền hơn</strong><br>
    Về độ bền, <strong>băng tải PU</strong> có khả năng chống cắt tốt hơn băng tải PVC. Và
    <strong>băng tải PU</strong> cũng
    có thể được sử dụng cho công việc cắt nhiều lần trên máy cắt ở một độ dày nhất
    định.<br><br>

    <strong><strong>Băng tải PU</strong> phục hồi nhanh hơn</strong> <br>
    <strong>Băng tải PU</strong> được xử lý đặc biệt: vải polyurethane tổng hợp có độ bền
    cao được sử dụng
    làm khung chịu lực, và lớp sơn phủ được làm từ nhựa polyurethane (PU). Nó không chỉ có
    các đặc điểm của độ bền kéo cao, uốn cong tốt, nhẹ, mỏng và dẻo dai của băng tải thông
    thường.
</span>`,
  },
  {
    id: 2,
    title: "TPU",
    content: `<span>
    Các loại vật liệu khác cho băng tải công nghiệp thực phẩm là Polyurethane nhiệt dẻo
    (<strong>TPU</strong>). <strong>TPU</strong> có thể cực kỳ hữu ích cho các ứng dụng hiệu
    suất cao vì nó cung cấp các đặc
    tính thiết yếu mà nhiều loại polyme tương tự khác không có.

    <br><br>

    Mặc dù băng tải <strong>TPU</strong> được phân thành nhiều loại khác nhau như ( PU ) dựa
    trên bản chất
    của chúng, nhưng các đặc điểm chung của chúng bao gồm khả năng chống mài mòn và độ bền
    cao đối với dầu mỡ thực vật, động vật và khoáng sản.<br><br>

    Đai <strong>TPU</strong> có bề mặt nhẵn để giảm cặn vi khuẩn và dễ dàng quá trình làm
    sạch dây đai. Mặc
    dù vật liệu tương đối đắt tiền cho băng tải <strong>TPU</strong>, nó rất thích hợp cho
    một loạt các quy
    trình thực phẩm hiện đại có yêu cầu đặc biệt đối với thực phẩm tiếp xúc trực tiếp với
    băng tải.<br><br>

    <strong>TPU</strong> là một loại băng tải cải tiến ban đầu được thiết kế để cải thiện vệ
    sinh và giảm chi
    phí làm sạch trong sản xuất thực phẩm công nghiệp. Chất liệu sản phẩm không chứa chất
    hóa dẻo và không làm ô nhiễm hàng hóa trong quá trình vận chuyển. Đặc tính chống cắt và
    chống mài mòn cũng giúp <strong>TPU</strong> có thể áp dụng cho nhiều lĩnh vực công
    nghiệp khác nhau
    ngoài chế biến thực phẩm. ngoài ra <strong>TPU</strong> được gia cố bằng dây aramid làm
    thành viên chịu
    lực và đảm bảo không bị giãn. Chúng là những chiếc thắt lưng mạnh nhất trên thị
    trường!<br><br>

    <strong>TPU</strong> là một sản phẩm rất linh hoạt. Các trường hợp sử dụng phổ biến ngày
    nay là trong các
    quy trình phân chia nhỏ của ngành công nghiệp thịt, sản xuất pho mát, chế biến thủy sản,
    cũng như xử lý thực phẩm đông lạnh. Các ngành như Gia cầm, Heo, Thịt bò, Phô mai, Cá và
    Rau quả, nhưng đặc tính vật liệu cũng cho phép sử dụng rộng rãi hơn nhiều trong các ứng
    dụng khác.

</span>`,
  },
];

$(".product-filter .product-controls li.product--controls-tab").each(function (
  index,
  item
) {
  item.style.zIndex = dataTab.length - index;

  $(this).on("click", function () {
    $(".product-filter .product-controls li.product--controls-tab").removeClass(
      "active"
    );
    $(this).addClass("active");

    document.querySelector(".section-detail").classList.remove("show");
    $(".product-filter .product-controls li.product--controls-tab").each(
      function (index, item) {
        item.style.zIndex = dataTab.length - index;
      }
    );

    item.style.zIndex = null;
    const detail = document.querySelector(".section-detail");
    const title = document.querySelector(".section-title h3");
    const titleProductList = document.querySelector(".product-list-title");

    if (title.innerText === dataTab[index].title) {
      return;
    }

    detail.style.opacity = 0;
    title.style.opacity = 0;
    titleProductList.style.opacity = 0;

    setTimeout(() => {
      detail.innerHTML = dataTab[index].content;
      detail.style.opacity = 1;

      title.innerHTML = dataTab[index].title;
      title.style.opacity = 1;

      document.querySelector(".product-list-title span").innerHTML =
        dataTab[index].title;
      titleProductList.style.opacity = 1;
    }, 300);
  });
});

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

function createLogo() {
  const logo = document.createElement("div");
  logo.classList.add("logo");
  const a = document.createElement("a");
  a.href = "./index.html";
  const img = document.createElement("img");
  img.src = "./img/logo.png";
  img.alt = "";
  a.appendChild(img);
  logo.appendChild(a);
  document.querySelector(".slicknav_menu").appendChild(logo);
}

createLogo();

const chatBoxTitle = document.querySelector(".chat-box-title");
const chatBox = document.querySelector(".chat-box");
const chatBoxContent = document.querySelector(".chat-box-content");

function openChatbox() {
  chatBoxTitle.addEventListener("click", function () {
    chatBoxTitle.classList.add("full-width");
    chatBoxContent.classList.add("show");
    chatBox.classList.add("show");
  });
}

function closeChatbox() {
  document
    .querySelector(".chat-box-close")
    .addEventListener("click", function () {
      chatBoxTitle.classList.remove("full-width");
      chatBoxContent.classList.remove("show");
      chatBox.classList.remove("show");
    });
}

function pressKey(e) {
  if (e.keyCode === 27) {
    document.querySelector(".modal").classList.remove("show");
    document.querySelector(".col-product-image").remove();
    document.querySelector(".details-product").remove();
  }
}

function loadDataProduct() {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("col-6");
    div.classList.add("col-lg-3");
    div.innerHTML = `<div class="single-product-item">
      <figure>
          <img src="${item.img}" alt="">
      </figure>
      <div class="product-text">
          <h6>${item.name}</h6>
      </div>
  </div>`;
    listProduct.appendChild(div);

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
          if (index === 0) {
            divDetailProduct.innerHTML += `<div class="col-12 details-product-suggest active">
            <h4 class="">${items.name}</h4>
            <ul class="">
                <li>Màu sắc:</li>
                <li>Thông số:</li>
            </ul>
        </div>`;
          } else {
            divDetailProduct.innerHTML += `<div class="col-12 details-product-suggest">
            <h4 class="">${items.name}</h4>
            <ul class="">
                <li>Màu sắc:</li>
                <li>Thông số:</li>
            </ul>
        </div>
        `;
          }
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

        data.forEach((items, index) => {
          if (items.type === 1) {
            if (index + 1 === item.id) {
              divDetailProduct.innerHTML += `<div class="col-12 details-product-suggest active">
            <h4 class="">${items.name}</h4>
            <ul class="">
                <li>Màu sắc:</li>
                <li>Thông số:</li>
            </ul>
        </div>`;
            } else {
              divDetailProduct.innerHTML += `<div class="col-12 details-product-suggest">
              <h4 class="">${items.name}</h4>
              <ul class="">
                  <li>Màu sắc:</li>
                  <li>Thông số:</li>
              </ul>
          </div>
          `;
            }
          }
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

            img.src = data[index].img;
          });
        });
      });
    }
  });
}

function closeModal() {
  document
    .querySelector(".modal .close")
    .addEventListener("click", function () {
      document.querySelector(".modal").classList.remove("show");
      document.querySelector(".details-product").remove();
      document.querySelector(".col-product-image").remove();
    });
}

function clickOutsideCloseModal() {
  window.addEventListener("click", function (e) {
    if (e.target == modal) {
      document.querySelector(".modal").classList.remove("show");
      document.querySelector(".details-product").remove();
      document.querySelector(".col-product-image").remove();
    }
  });
}

function closeOutsideChatBox(e) {
  document.querySelector("body").addEventListener("click", function (e) {
    if (!e.target.closest(".chat-box")) {
      chatBoxTitle.classList.remove("full-width");
      chatBoxContent.classList.remove("show");
      chatBox.classList.remove("show");
    }
  });
}

try {
  if (document.querySelector(".modal")) {
    clickOutsideCloseModal();
    closeModal();
    document.addEventListener("keydown", pressKey);
  }

  if (document.querySelector(".chat-box")) {
    closeOutsideChatBox();
    openChatbox();
    closeChatbox();
  }
} catch (error) {}
