
function openSidebar() {
    document.getElementById('sideMenu').checked = true;
  }

function hideSidebar() {
    document.getElementById('sideMenu').checked = false;
  }

document.addEventListener('click', function(event) {
    if (!menuToggle.contains(event.target))
      hideSidebar();
  });




  