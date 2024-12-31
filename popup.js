document.addEventListener("DOMContentLoaded", () => {
  const tipElement = document.getElementById("tip");
  const tipImageElement = document.getElementById("tip-image");
  const newTipButton = document.getElementById("new-tip");
  const categorySelect = document.getElementById("category");

  let tipsData = {};
  let currentCategory = localStorage.getItem("category") || "all";

  categorySelect.value = currentCategory;

  // Fetch tips from the API
  fetch("tips.json") 
    .then(response => response.json())
    .then(data => {
      tipsData = data;

      // Show a tip on load
      showRandomTip();


      categorySelect.addEventListener("change", () => {
        currentCategory = categorySelect.value;
        localStorage.setItem("category", currentCategory); // Save 
        showRandomTip();
      });

      // Event listener for new tip button
      newTipButton.addEventListener("click", showRandomTip);


      setInterval(showRandomTip, 10000);
    })
    .catch(error => {
      console.error("Error fetching tips:", error);
      tipElement.textContent = "Couldn't load tips. Please try again later.";
    });

  // Show a random tip based on the selected category
  const showRandomTip = () => {
    let tips = [];

    if (currentCategory === "all") {

      for (const category in tipsData) {
        tips = tips.concat(tipsData[category]);
      }
    } else {
      tips = tipsData[currentCategory] || [];
    }

    if (tips.length === 0) {
      tipElement.textContent = "No tips available for this category.";
      tipImageElement.src = "";
    } else {
      const randomIndex = Math.floor(Math.random() * tips.length);
      const tip = tips[randomIndex];
      tipElement.textContent = tip.text;
      tipImageElement.src = tip.image;
      tipElement.classList.remove("fade-in");
      void tipElement.offsetWidth; 
      tipElement.classList.add("fade-in");
    }
  };
});