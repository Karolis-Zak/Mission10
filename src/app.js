document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons with class .collapsible
  var coll = document.getElementsByClassName("collapsible");
  var contents = document.getElementsByClassName("content");
  var images = [
    "https://practicebusiness.co.uk/wp-content/uploads/2023/06/iStock-1388887234.jpg",
    "https://imageio.forbes.com/specials-images/imageserve/63b0398a5d4f4c588104c480/Risk-Management-For-Your-Business--What-You-Need-To-Know/960x0.jpg?format=jpg&width=960",
    "https://miro.medium.com/v2/resize:fit:1358/0*3NJELSfPcv8fu8LW",
    "https://images.ctfassets.net/5natoedl294r/5l2TKJOYFAuJ8hAbl03KUe/7537f07186062235636c9076c343ac38/8_Key_Tips_on_How_to_Improve_Network_Performance_for_Business.png",
  ];
  var sectionImage = document.getElementById("section-image");

  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      // Toggle the clicked section
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }

      // Change the image based on the section
      sectionImage.src = images[i];

      // Close other sections
      for (let j = 0; j < coll.length; j++) {
        if (coll[j] !== this) {
          coll[j].classList.remove("active");
          contents[j].style.maxHeight = null;
        }
      }
    });
  }

  // Set the first section to be expanded by default
  coll[0].classList.add("active");
  contents[0].style.maxHeight = contents[0].scrollHeight + "px";
  sectionImage.src = images[0];

  // JavaScript to handle link clicks
  document.querySelectorAll(".learnMore").forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Waaw, you just learned more!");
    });
  });
});

// JavaScript to handle button click
document.getElementById("myButton").addEventListener("click", function () {
  this.textContent = "You clicked me!";
});
