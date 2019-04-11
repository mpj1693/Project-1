//this is a test 

$("button").on("click", function() {


  $.ajax({
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=AEH5HGnHdiehb7Tei6mXUTXrULADEytJ&size=7&keyword=lady%20gaga",
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
  })
})