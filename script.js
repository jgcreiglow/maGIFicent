
var gifs =["happy", "sad","angry"]
function displaygif() {

  var gif = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=3OdfHZxV3YlV0xljDy4IyVaniiiVSGFQ&limit=5";

  // call for button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
  var results = response.data
//div full of gifs
    for (var i = 0; i < results.length; i++) {
    var gifDiv = $("<div class='gif'>");
//rating
    var rating = results[i].rating;
    var pOne = $("<p>").text("Rating: " + rating);



//imageStill
    var imgURL = results[i].images.fixed_height_still.url;
    var image = $("<img data-state='still'>").attr("src", imgURL);

    var anImgURL = results[i].images.fixed_height.url;
    var anImage = $("<img data-state='animate'>").attr("src", anImgURL);

//new gif to top of list
    $("#gifs-view").prepend(gifDiv);
        gifDiv.append(anImage);
        gifDiv.append(pOne);
};
  });

}

//makes the buttons
function renderButtons() {

  $("#buttons-view").empty();

  for (var i = 0; i < gifs.length; i++) {
    var a = $("<button>");
    a.addClass("gif-btn btn-success");
    a.attr("data-name", gifs[i]);
    a.text(gifs[i]);
    $("#buttons-view").append(a);
  }
};

 // when you click the button
      $("#add-gif").on("click", function(event) {
        event.preventDefault();

        var gif = $("#gif-input").val().trim();
        gifs.push(gif);

        renderButtons();
      });


      $(document).on("click", ".gif-btn", displaygif);

      renderButtons();

      $(".gif").on("click", function() {
        var state = $(this).attr("data-state");

        if (state === "still") {
          var imgURL = results[i].images.fixed_height.url;
          var image = $("<img data-state='animate'>").attr("src", imgURL);
        }
        else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
