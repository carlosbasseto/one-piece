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

    Array.from(items).forEach(function(item) {
        item.addEventListener('click', function() {
            const contentId = item.getAttribute('data-id');
            showContent(contentId);
        });
    });

    function showContent(id) {
        const personMsg = {
            1: "Chapeu de palha",
            2: "Barba Branca",
            3: "Big Mom",
            4: "Piratas das Feras",
            5: "Barba Negra",
            6: "Piratas do Ruivo",
            7: "Piratas do Sol",
            8: "Piratas do Coração",
        }

        const personcolor =[ {
            1: "red",
            2: "blue",
            3: "pink",
            4: "yellow",
            5: "black",
            6: "orange",
            7: "#6abce2",
            8: "#d29e00",
        },
    {
        1: "#ee6b6e",
    }]



        Toastify({
              text: ` ${personMsg[id]}`,
            style: {
                background: `${personcolor[1][id]}`,
                marginTop: "100px",
                borderBottom: `2px solid ${personcolor[0][id]}` ,
                color:` ${personcolor[0][id]}` ,      
              },


            duration: 1500,
            close: true,
        }).showToast();
        contents.forEach(function(content) {
            content.classList.add('hidden');
        });
        const contentToShow = document.getElementById(`content${id}`);
        contentToShow.classList.remove('hidden');
        contentBox.classList.remove('hidden');
    }

    contentBox.addEventListener('click', function() {
       
        contentBox.classList.add('hidden');
        contents.forEach(function(content) {
            content.classList.add('hidden');
        });
    });
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

