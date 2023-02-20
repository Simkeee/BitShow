// Define a function to handle search queries
function handleSearchQuery(event) {

  const query = event.target.value;
  

  fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
    .then(response => response.json())
    .then(data => {

      const shows = data.map(item => item.show.name);
      

      $('#search-results').empty();
      
      shows.slice(0, 10).forEach(show => {
        const li = document.createElement("li");
        li.textContent = show;
        li.addEventListener('click', () => {
          //var itemText = li.textContent;
          window.location = "info.html";
          const item = data.find(obj => obj.show.name === show);
          localStorage.setItem('idNum', item.show.id);
        });
        $('#search-results').append(li);
      });
      $('#search-results').show();
    });
    
  }
  
  $('#search-input').on('input', handleSearchQuery);
  


