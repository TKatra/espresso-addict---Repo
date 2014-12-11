// ------------------------------------------------------------------------------------------
// Helper function  for loading JSON files
// [Called from start]
// ------------------------------------------------------------------------------------------

function jsonLoader(fileName){

  // A result to return after the file has loaded
  var result;
  
  // An ajax call
  $.ajax({

    url: "data/" + fileName,
    dataType: "json",
    async: false,
    
    // Successful read - put the data in result
    success: function(data){
      result = data;
    },
    
    // Log errors
    error: function(e){
      console.log("Failed to load " + fileName +
        ". Check your file name and your json!");
    }
  });

  // Return the result
  return result;
}
