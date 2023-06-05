document.addEventListener("DOMContentLoaded", function() {
  var toggleContainer = document.getElementById("toggle-container");

  for (var i = 0; i < 1000; i++) {
    var toggleBox = createToggleBox(i + 1);
    toggleContainer.appendChild(toggleBox);
  }

  // $(document).ready(function() {

  //   $('.toggle-label').click(function() {

  //     $(".toggle-label").toggleClass("blue"); 
  //   });
  // });

  function createToggleBox(index) {
    var toggleBox = document.createElement("div");
    toggleBox.classList.add("toggle-box");

    var label = document.createElement("label");
    label.classList.add("toggle-label");
    label.innerHTML = "Meal " + index;
    label.addEventListener("click", function() {
      toggleContent.style.display = (toggleContent.style.display === "none") ? "block" : "none";
      label.classList.add("blue");
    });

    var toggleContent = document.createElement("div");
    toggleContent.classList.add("toggle-content");
    toggleContent.innerHTML = "check ";

    toggleBox.appendChild(label);
    toggleBox.appendChild(toggleContent);

    return toggleBox;
  }
});
