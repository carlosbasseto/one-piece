// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const filterInput = document.getElementById('filterInput');
    const itemsList = document.getElementById('itemsList');
    const items = itemsList.getElementsByTagName('li');
    const contentBox = document.getElementById('contentBox');
    const contents = document.querySelectorAll('.content');

    filterInput.addEventListener('keyup', function(event) {
        const filterValue = filterInput.value.toLowerCase();

        Array.from(items).forEach(function(item) {
            const itemText = item.textContent.toLowerCase();

            if (itemText.includes(filterValue)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });

        if (event.key === 'Enter') {
            let firstVisibleItem = null;
            Array.from(items).forEach(function(item) {
                if (!item.classList.contains('hidden') && !firstVisibleItem) {
                    firstVisibleItem = item;
                }
            });
            if (firstVisibleItem) {
                const contentId = firstVisibleItem.getAttribute('data-id');
                showContent(contentId);
                filterInput.value = '';
            }
        }
    });

    function showContent(id) {
        contents.forEach(function(content) {
            content.classList.add('hidden');
        });
        const contentToShow = document.getElementById(`content${id}`);
        contentToShow.classList.remove('hidden');
        contentBox.classList.remove('hidden');
    }
});



  
  var modal = document.getElementById("myModal");
 
  var btn = document.getElementById("openModal");

  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }