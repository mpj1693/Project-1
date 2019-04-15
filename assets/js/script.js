
// keywords extracted from spotify API 
// for now, the elements are placeholders until linked with spotify API
var keywordsArray = ["Khalid", "drake", "celine dion"]
//var keywordsArray = ["drake"]
//var keywordsArray = ["celine dion"]


// On click event to retrive event data from TicketMaster API
$("button").on("click", function() {
  console.log("button clicked")

  for (let j=0; j<keywordsArray.length; j++){

    $.ajax({
      type:"GET",
      url:`https://app.ticketmaster.com/discovery/v2/events.json?apikey=AEH5HGnHdiehb7Tei6mXUTXrULADEytJ&size=3&keyword=${keywordsArray[j]}`,
      async:true,
      dataType: "json",
      success: function(json) {
                  console.log(json);


                  //url working?
                  console.log("keywordsArray[j]: " + keywordsArray[j])
                  //console.log("URL: " + url);

                  var TMresponse = json._embedded.events
    
                  console.log(TMresponse)
    
                  //loop through TMresponse array and write each concert on page
                  for (var i = 0; i < TMresponse.length; i ++) {
                    var $name = TMresponse[i].name;
                    var $venue = TMresponse[i]._embedded.venues[0].name;
                    var $date = TMresponse[i].dates.start.localDate;
                    var $time = TMresponse[i].dates.start.localTime;
                    var $priceRangeMin = TMresponse[i].priceRanges[0].min;
                    var $priceRangeMax = TMresponse[i].priceRanges[0].max;
                    var $btnTM = $("<a>").attr("href", TMresponse[i].url).attr("target", "_blank").text("ticketmaster").addClass("btn btn-outline-dark");
                              
    
                    console.log($name);
                    console.log($venue);
                    console.log($date);
                    console.log($time);
    
                    // write on table
                    var newRow = $("<tr>").append(
                      $("<td>").text($name),
                      $("<td>").text($venue),
                      $("<td>").text($date),
                      $("<td>").text($time),
                      $("<td>").text($priceRangeMin + " - " + $priceRangeMax),
                      $("<td>").append($btnTM),
                      );
      
                    $("tbody").append(newRow);
                  }
    
    
               },
      error: function(xhr, status, err) {
                  // This time, we do not end up here!
               }
      })



  }

  
})