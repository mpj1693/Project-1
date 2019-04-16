
  $(document).ready(function () {
  $(".search-button").click(function () {
    console.log(".search-button")
    
    $(".zip-code").hide();

    $(".spotify-button").show();
    
   
  
    $(".spotify-button").click(function () {

      $(".spotify-button").hide();

      $(".login-spotify").show();
      
      var loginSpotify = $(".login-spotify");
  
      TweenLite.from(loginSpotify, 1, { x: -200 },{x:200});


        $(".login-button").click(function () {

          $(".lil-header").hide();
          
          var spoTicket = $(".spotify-ticketmaster");

          TweenLite.from(spoTicket, 1, { opacity: 0, y: 50 });
        
          $(".spotify-ticketmaster").show();

      })

     })
    
    });
    
    
  });


var header = $(".header");

    lilHeader = $(".lil-header");

        TweenLite.from(header, 1, {x: -200, ease:Power2.easeOut });
TweenLite.from(lilHeader, 1, { autoAlpha: 0, delay: 1 });

       

  









