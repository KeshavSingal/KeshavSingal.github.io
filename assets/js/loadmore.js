document.addEventListener("DOMContentLoaded", function () {
    const loadMoreBtn = document.getElementById("load-more");
    let hiddenProjects = document.querySelectorAll(".project-item.hidden");
    let showCount = 3;  // Number of projects to show on each click
  
    loadMoreBtn.addEventListener("click", function () {
      for (let i = 0; i < showCount && hiddenProjects.length > 0; i++) {
        hiddenProjects[i].classList.remove("hidden");
      }
      // Update the list of hidden projects
      hiddenProjects = document.querySelectorAll(".project-item.hidden");
  
      // If no more hidden projects, hide the button
      if (hiddenProjects.length === 0) {
        loadMoreBtn.style.display = "none";
      }
    });
  });
  

  // This code is suggested by AI chatpgt, and edit by me 