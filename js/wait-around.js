// ------------------------------------------------------------------------------------------
// When the player waits there are often several options
// for what will happen. Choose one randomly.
// [Called from doOnMenuChoice]
// ------------------------------------------------------------------------------------------

function waitAround(choice){

  // Pick a random choice from what may happens while you wait
  // Don't pick the same as last if there are multiple
  var random;

  // a do...while-loop continues to run until its condition is false
  do {
    random = Math.floor(Math.random()*choice.length);
  }
  // this is the condition of the loop:
  // if there is more than one choice and we get the same description
  // as last time - or no description - then try again
  while(choice.length > 1 &&
    (choice[random].description == lastDescription || choice[random].hidden));

  choice = choice[random];

  // if the choice should only be shown once mark it as hidden from now on
  if(choice["show only once"]){choice.hidden = true;}

  return choice;
}
