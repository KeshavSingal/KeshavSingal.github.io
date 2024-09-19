document.getElementById('load-more').addEventListener('click', function() {
    // Find all hidden project items
    let hiddenItems = document.querySelectorAll('.project-item.hidden');
  
    // Show the first 3 hidden items
    for (let i = 0; i < 3 && i < hiddenItems.length; i++) {
      hiddenItems[i].classList.remove('hidden');
    }
  
    // If there are no more hidden items, hide the 'Load More' button
    if (document.querySelectorAll('.project-item.hidden').length === 0) {
      document.getElementById('load-more').style.display = 'none';
    }
  });
  