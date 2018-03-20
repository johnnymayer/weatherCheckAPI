
$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let zip = $('#zip').val();
    let city = $('#location').val();
    $('#zip').val("");
    // $.ajax({
    //   url: `http://api.openweathermap.org/data/2.5/weather?q=${zip},us&units=imperial&appid=3821e840761c148951dab6e048decd51`,
    //   type: 'GET',
    //   data: {
    //     format: 'json'
    //   },
    //   success: function(response) {
    //     $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
    //     $('.showF').text(`The temperature in Fahrenheit is
    //       ${response.main.temp}`);
    //   },
    //   error: function() {
    //     $('#errors').text("There was an error processing your request. Please try again.")
    //   }
    // });
    let request = new XMLHttpRequest();
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${zip},us&units=imperial&appid=3821e840761c148951dab6e048decd51`;
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    getElements = function (response) {
      $('.showCity').text(`${response.name}`);
      // $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Fahrenheit is ${response.main.temp} degrees.`)
    }
  });
});
