const idNum = localStorage.getItem('idNum');
$(document).ready(function() {
  $.ajax({
    url: "http://api.tvmaze.com/shows/"+idNum,
    type: "GET",
    dataType: "json",
    success: function (result) {
      const card = $("<div>")
      .addClass("card")
      .append($("<div>")
      .addClass("name")
      .text(result.name))
      .append($("<div>")
      .addClass("info").append(
      $("<img>").attr("src", result.image ? result.image.medium : ""),$(result.summary)));
    $("#wrap").append(card);
    }
  });
});