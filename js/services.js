function chooseService() {
  const service = document.querySelectorAll(".service-section .service-item");

  service.forEach((item) => {
    item.addEventListener("click", () => {
      switch (item.dataset.service) {
        case "1":
          document.querySelector(".slider-mini").style.display = "none";
          document.querySelector(".img-service-distributive").style.display =
            "none";
          document.querySelector(".service-section iframe").style.display =
            "block";
          break;
        case "3":
          document.querySelector(".slider-mini").style.display = "none";
          document.querySelector(".img-service-distributive").style.display =
            "block";
          document.querySelector(".service-section iframe").style.display =
            "none";
          break;
        case "4":
          document.querySelector(".slider-mini").style.display = "flex";
          document.querySelector(".service-section iframe").style.display =
            "none";
          document.querySelector(".img-service-distributive").style.display =
            "none";
          break;

        default:
          document.querySelector(".slider-mini").style.display = "none";
          document.querySelector(".service-section iframe").style.display =
            "block";
          document.querySelector(".img-service-distributive").style.display =
            "none";
          break;
      }
    });
  });
}

chooseService();
