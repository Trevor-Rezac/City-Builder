## HTML ELEMENTS
 - 10 elements needed
  - three drop downs (possibly surrounded in divs to display:flex?)
    Why? to choose options to display
    How? 'dropDown.addEventListener('change', () => {})'
          'dropDown.value' to get the selected images
  - three images
    Why? to display the selected option
    How? 'myImg.src = 'whatever.jpg'
  - an input area
    Why? to allow user to type their city slogan
    How?
      * const slogan = myInput.value
      * 'myArray.push(slogan)
  - a submit button
    Why? to submit the slogan
    How? 'button.addEventListener('click', () =>)
  - empty div to inject slogans
    Why? a place to hold the city slogans
    How? use the 'display a list" pattern from lecture
  - a div for timesChanged count

## Events

on change of any dropdown
  - the corresponding image will change
    * get the value from the dropdown element
    * use that value to change the correct image tag's '.src'
  - the count of that dropdown will change
    * timesChanged++ 
    * change the DOM to update the new count

on button click
 - get the slogan from the input.value
 - push the slogan to our array of slogans
 - update the DOM
  * clear out the old Slogans from the DOM (immutable)
  * loop through the slogan array
  * append each slogan
