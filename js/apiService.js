$(document).ready(function() {
  var page = 0;
  var pageSize = 50;


  function loadShows() {
  $.ajax({
    url: "http://api.tvmaze.com/shows",
    type: "GET",
    dataType: "json",
    data: { page: page, embed: 'episodes' },
    success: function (shows) {
      $('#shows').empty();
      for (var i = 0; i < shows.length && i < pageSize; i++) {
      const showCard = $("<div>")
          .addClass('show-card')
          .append($("<img>").attr("src", shows[i].image ? shows[i].image.medium : ""),
          $("<div>")
          .addClass("show-name")
          .text(shows[i].name));
          showCard.attr('id', `${shows[i].id}`);
        $("#shows").append(showCard);
        
        $('.show-card').last().click(function() {
          window.location = "info.html";
          localStorage.setItem('idNum',$(this).attr('id'));//Cuvam id od kliknutog filma u localstorage
          console.log($(this).attr('id'));
        });
      }
    } 
      });
    }
    function loadNextShows() {
      page++;
      loadShows();
    }

    function loadPreviousShows() {
      if (page > 0) {
        page--;
        loadShows();
      }
    }

    $(function() {
      loadShows();
      $('#previousButton').click(loadPreviousShows);
      $('#nextButton').click(loadNextShows);
    });

  });
