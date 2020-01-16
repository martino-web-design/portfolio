// set search to default city, and imperial units
let searchName = "San Francisco,us";
let temp_units = "imperial";

currentWeather(searchName);
forecastWeather(searchName);

// Select temp measurements - F or C
$('#tempConv span').click(function(){

  if($(this).hasClass('farh')){
    temp_units = "imperial";
    $('#f_temp').html("");
    $('#f_range').html("");
    currentWeather(searchName);
    forecastWeather(searchName);
    if($(this).hasClass('fade')){
      $(this).removeClass('fade');
      $('.cels').addClass('fade');
    }
  }
  else if($(this).hasClass('cels')){
    temp_units = "metric";
    $('#f_temp').html("");
    $('#f_range').html("");
    currentWeather(searchName);
    forecastWeather(searchName);
    if($(this).hasClass('fade')){
      $(this).removeClass('fade');
      $('.farh').addClass('fade');
    }
  }
});

//  Search weather on click
$('#searchIcon').on('click', function(){
  $('#f_temp').html("");
  $('#f_range').html("");

  searchName = $('#city').val() + ",us";

  if($('#city').val() != ""){
  currentWeather(searchName);
  forecastWeather(searchName);
  $('#city').val("");
  }
}); // end on click

// Current weather function
function currentWeather(x){
  $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + x + "&units=" +
  temp_units + "&appid=7608f76310ca66d7b69f2140e5b0a11c",
    function(current){
console.log(current)
let sunR = new Date(current.sys.sunrise * 1000)
let sunS = new Date(current.sys.sunset * 1000)
console.log(sunR, sunS)

      let date = new Date(current.dt * 1000);
      let dateFormat = date.toLocaleDateString('en-US',{weekday:"long", hour:"numeric", minute:"2-digit"});
      let loc = current.name;
      let main = current.weather[0].main.toUpperCase();
      let icon = "img/" + current.weather[0].icon + ".png";
      let desc = current.weather[0].description;
      let temp = Math.round(current.main.temp) + "&deg;";
      let feels = Math.round(current.main.feels_like ) + "&deg;";
      let wind = direction() + " " + Math.round(current.wind.speed) + " mph";
      let hum =  Math.round(current.main.humidity) + "%";

      $('#date').html(dateFormat);
      $('#w_location').html(loc);
      $('#w_main').html(main);
      $('#w_img').attr('src', icon);
      $('#w_forecast').html(desc);
      $('#w_temp').html(temp);
      $('#w_feel').html(feels);
      $('#w_wind').html(wind);
      $('#w_hum').html(hum);

      // Create direction func
      function direction(){

        if(current.wind.deg > 22.5 && current.wind.deg <= 67.5){
          return "NE";
        }
        else if(current.wind.deg > 67.5 && current.wind.deg <= 112.5){
          return "E";
        }
        else if(current.wind.deg > 112.5 && current.wind.deg <= 157.5){
          return "SE";
        }
        else if(current.wind.deg > 157.5 && current.wind.deg <= 202.5){
          return "S";
        }
        else if(current.wind.deg > 202.5 && current.wind.deg <= 247.5){
          return "SW";
        }
        else if(current.wind.deg > 247.5 && current.wind.deg <= 292.5){
          return "W";
        }
        else if(current.wind.deg > 292.5 && current.wind.deg <= 337.5){
          return "NW";
        }
        else {
          return "N";
        }
      } // end direction func
    }
  );  // end JSON
} // end current weather func

// Forecast weather function
function forecastWeather(x){
  $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=" + x + "&units=" +
  temp_units + "&appid=7608f76310ca66d7b69f2140e5b0a11c",
    function(forecast){
console.log(forecast)
      // let date_0 = new Date(forecast.list[0].dt * 1000);

      // Array length for forecast
      let i;
      let arr = forecast.list;
      let time = "";
      let temp = "";
      let day = {};
      let dayArray = [];
      let tempArray = [];
      let arrArray = [];

      // For loop Forecast Array
      for(i = 0; i < arr.length; i++){

        time = new Date(arr[i].dt * 1000);
        day = time.toLocaleDateString('en-US', {weekday:"short"});
        time = time.toLocaleTimeString('en-US', {hour:"numeric"}); //, minute:"2-digit"
        temp = arr[i].main.temp;

        // push forecast info to new array
        arrArray.push({day, temp})
        // gets all temps of forecast to get create high/low forecast
        tempArray.push(temp);

        // only add each day one time to array
        if(!dayArray.includes(day)){
          dayArray.push(day);
        }

        // create dom elements for forecast
        let iconFore = "img/" + forecast.list[i].weather[0].icon + ".png";
        let div = document.createElement("div")
        div.className = "temp-div";
        let span1 = document.createElement("p");
        let span2 = document.createElement("p");
        let span3 = document.createElement("p");
        let img = document.createElement("img");

        $(span3).html(day).css({"color": "#999", "text-transform": "uppercase"});
        $(span1).html(time);
        $(img).attr('src', iconFore);
        $(span2).html(Math.round(temp) + "&deg;").css({"font-size": "24px"});
        $(div).append(span3, span1, img, span2);
        $('#f_temp').append(div).css({ "border-top": "1px solid #999", "border-bottom": "1px solid #999"});

      } // end forecast array loop

      // Get High/Low temps, create array for each day
      let mainArr = [];
      let newArr_a = [];
      let newArr_b = [];
      let newArr_c = [];
      let newArr_d = [];
      let newArr_e = [];

      // push to mainArr for use in for loop
      mainArr.push(newArr_a,newArr_b,newArr_c,newArr_d,newArr_e,);

      let a = dayArray[0]
      let b = dayArray[1]
      let c = dayArray[2]
      let d = dayArray[3]
      let e = dayArray[4]

      // loop thru arr of day, temps
      for(let i = 0; i<arrArray.length; i++){

        if(arrArray[i].day === a){
          newArr_a.push(arrArray[i].temp)
        }
        else if(arrArray[i].day === b){
          newArr_b.push(arrArray[i].temp)
        }
        else if(arrArray[i].day === c){
          newArr_c.push(arrArray[i].temp)
        }
        else if(arrArray[i].day === d){
          newArr_d.push(arrArray[i].temp)
        }
        else if(arrArray[i].day === e){
          newArr_e.push(arrArray[i].temp)
        }
      } // end Day arrayloop ----

      // loop thur High/Low arr , create DOM elements
    for(let i = 0; i<mainArr.length; i++){
        let max = Math.max(...mainArr[i]);
        let min = Math.min(...mainArr[i]);
        let newDay = (dayArray[i]);

        let div = document.createElement("div");
        div.className = "range-div";
        let span1 = document.createElement("p");
        let span2 = document.createElement("p");
        let span3 = document.createElement("p");

        span1.append(newDay);
        $(span2).append(Math.round(max) + "&deg;");
        $(span3).append(Math.round(min) + "&deg;");

        div.append(span1, span2, span3);
        $('#f_range').append(div);
      } // end for loop

    }
  );  // end JSON
} // end forecast weather func
