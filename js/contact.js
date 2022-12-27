document
  .querySelector("button[type='submit']")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const phone = document.querySelector("input[name='phone']").value;
    const message = document.querySelector("textarea[name='message']").value;
    const title = document.querySelector("input[name='title']").value;

    if (name === "" || email === "" || phone === "" || message === "") {
      createToast("error");
      return;
    }

    const data = {
      name,
      email,
      phone,
      title,
      message,
    };

    const link =
      "mailto:nghi.impossible@gmail.com" +
      "?cc=nguyenhoang41911@gmail.com" +
      "&subject=" +
      encodeURIComponent(title) +
      "&body=" +
      encodeURIComponent(
        "Tên: " +
          name +
          "\n" +
          "Email: " +
          email +
          "\n" +
          "Số điện thoại: " +
          phone +
          "\n" +
          "Nội dung: " +
          message
      );

    window.location.href = link;
    createToast("success");
  });
const toasts = {
  success: {
    icon: '<i class="fas fa-check-circle"></i>',
    msg: "Gửi thành công!",
  },
  error: {
    icon: '<i class="fas fa-exclamation-triangle"></i>',
    msg: "Vui lòng điền đầy đủ thông tin !",
  },
};

function createToast(status) {
  let toast = document.createElement("div");
  toast.className = `toast ${status}`;

  toast.innerHTML = `
    ${toasts[status].icon}
    <span class="msg">${toasts[status].msg}</span>
    <span class="countdown"></span>
    `;
  document.querySelector("#toasts").appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "hide_slide 1s ease forwards";
  }, 4000);
  setTimeout(() => {
    toast.remove();
  }, 6000);
}
