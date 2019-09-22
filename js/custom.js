$( document ).ready(function() {
  var api_url = 'https://api.linkpreview.net'
  var key = '5b578yg9yvi8sogirbvegoiufg9v9g579gviuiub8' // not real

  $( ".content a" ).each(function( index, element ) {
    $.ajax({
        url: api_url + "?key=" + key + " &q=" + $( this ).text(),
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            $( element ).after(
            '<a href="' + result.url + '"> \n ' +
              '<div class="link-preview"> \n ' +
                '<div class="preview-image" style="background-image:url(' + result.image + ');"></div> \n ' + 
                '<div style="width:70%;" class="link-info"> \n ' +
                  '<h4>' + result.title +'</h4> \n ' +
                  '<p>' + result.description +'</p> \n ' +
                '</div><br> \n ' +
                  '<a href="' + result.url + '" class="url-info"><i class="far fa-link"></i>' + result.url + '</a> \n ' +
                '</div></a>');
            $( element ).remove();
        }
    })
  });
});


// const app = document.getElementById('root');

// const logo = document.createElement('img');
// logo.src = 'logo.png';

// const container = document.createElement('div');
// container.setAttribute('class', 'container');

// app.appendChild(logo);
// app.appendChild(container);

// // Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest();

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

// request.onload = function() {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response);
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(movie => {
//       const card = document.createElement('div');
//       card.setAttribute('class', 'card');

//       const h1 = document.createElement('h1');
//       h1.textContent = movie.title;

//       const p = document.createElement('p');
//       movie.description = movie.description.substring(0, 300);
//       p.textContent = `${movie.description}...`;

//       container.appendChild(card);
//       card.appendChild(h1);
//       card.appendChild(p);
//     })
//   } else {
//     const errorMessage = document.createElement('marquee');
//     errorMessage.textContent = `Gah, it's not working!`;
//     app.appendChild(errorMessage);
//   }
// }

// // Send request
// request.send();