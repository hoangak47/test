function chooseService() {
  const service = document.querySelectorAll(".service-section .service-item");

  service.forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".slider-mini").style.display = "none";
      document.querySelector(".service-section .iframe-factory").style.display =
        "none";
      document.querySelector(".img-service-distributive").style.display =
        "none";
      document.querySelector(".service-section .iframe-nurture").style.display =
        "none";

      document.querySelector(".service-section .notepaper").style.display =
        "none";

      switch (item.dataset.service) {
        case "1":
          document.querySelector(
            ".service-section .iframe-factory"
          ).style.display = "block";
          break;
        case "2":
          document.querySelector(
            ".service-section .iframe-nurture"
          ).style.display = "block";
          break;
        case "3":
          document.querySelector(".img-service-distributive").style.display =
            "block";
          break;
        case "4":
          document.querySelector(".slider-mini").style.display = "flex";
          break;
        case "5":
          document.querySelector(".service-section .notepaper").style.display =
            "block";
          break;

        default:
          document.querySelector(".slider-mini").style.display = "flex";
          break;
      }
    });
  });
}

chooseService();
