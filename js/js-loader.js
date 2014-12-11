// ------------------------------------------------------------------------------------------
// Load all JavaScripts
// (They load in order, but the only thing that matters here is that start is loaded last)
// ------------------------------------------------------------------------------------------

jsLoader(
  [
    "add-choices-to-locations.js",
    "add-directions.js",
    "build-menu.js",
    "do-on-menu-choice.js",
    "global-variables.js",
    "goFullScreen.js",
    "json-loader.js",
    "show-bag.js",
    "show-location.js",
    "update-bag.js",
    "update-player-location.js",
    "update-player-status.js",
    "update-progress-bars.js",
    "wait-around.js",
    "start.js"
  ]
);

// Helper function for loading JavaScript files
function jsLoader(jsFiles){
  // Note: Do not ever use $.getScript() for this, its bad!
  // It loads the scripts as AJAX and makes debugging impossible

  // Build a html string with script tags
  var scripts = "";
  for(var i = 0; i < jsFiles.length; i++){
    scripts += '<script src="js/' + jsFiles[i] + '"></script>';
  }

  // Write it inside the head element (document.write should otherwise be avoided)
  document.write(scripts);
}
