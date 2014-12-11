// ------------------------------------------------------------------------------------------
// This requests full screen mode cross browser compatible
// In order to work - must be started by a user interaction
// We start it on the first click on a menu button
// [Called from a click handler set in start]
// ------------------------------------------------------------------------------------------

function goFullScreen(){

  // Different browsers have different prefixes
  // for the built in requestFullScreen method
  var variants = [
    "requestFullScreen",
    "webkitRequestFullScreen",
    "mozRequestFullScreen",
    "msRequestFullScreen"
  ];

  // You can request full screen for any element
  // on the page, but we choose the body
  var body = document.body;

  // Check for the correct variant and run it
  for(var i = 0; i < variants.length; i++){
    if(body[variants[i]]){
      body[variants[i]]();
    }
  }

}
