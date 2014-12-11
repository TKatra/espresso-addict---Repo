// ------------------------------------------------------------------------------------------
// Start the game on DOM ready
// ------------------------------------------------------------------------------------------

$(start);

function start(){

  // Read JSON files for player, map and locations
  // Note: No "var" before player, map and locations
  // because they are global variables
  player = jsonLoader("player.json");
  map = jsonLoader("map.json");
  itemDetails = jsonLoader("item-details.json");
  locations = {};
  // This loop reads all files in location-details
  // based on the names given in locations.json
  var locs = jsonLoader("locations.json");
  for(var i = 0; i < locs.length; i++)
  {
    locations[locs[i]] = jsonLoader("location-details/" + locs[i] + ".json");
  }
  
  // Add choices to locations (based on map position etc)
  addChoicesToLocations();
  
  // Now that we have location objects in the var locations
  // convert the player location to an object
  player.location = locations[player.location];
  
  // Show the location the player is at
  showLocation(player.location);

  // Click handler for go full screen element
  $('.go-fullscreen').click(goFullScreen);

}
