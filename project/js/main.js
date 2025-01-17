

function getWeather(searchQuery) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&appid="+apiKey;

  $(".city").text();
    $(".temp").text();

  $.ajax(url,{success: function(data){
    $(".city").text(data.name);
    $(".temp").text(data.temp);
  }, error: function(error){
    $(".error-message").text("Error");
  }})
}

function searchWeather() {
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}

function showPicture(){
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
  $("p").html("High five! You're building your first web app!");

  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
}