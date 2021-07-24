function menu() {
    var x = document.getElementById('links')
    if(x.style.display === 'flex') {
        x.style.display = 'none'
    } else {
        x.style.display = 'flex'
        x.style.flexDirection = 'row'
        x.style.justifyContent = 'space-evenly'
        x.style.alignItems = 'center'
    }
    console.log("You clicked the menu button")
}

// Line 1 = creates a function gives it a meaningful name of menu, it requires no parameters
// Line 2 = We are creating a var calling it x (for simplicity) and saying that we want to effect the html document element that has an id of links
// Line 3 = Start of our conditional statement if when my function is called, the style for this element we want to effect has a display property of flex
// Line 4 = The instructions are to please change that display property to none
// Line 5 = If the above statement is false then here are my instructions
// Line 6-9 = Please change the following styles - display to flex, flex-directions to row, justify-content to space-evenly, and align-items to center
// Line 10 = Ending of else statement instructions
// Line 11 = Print to the console that the menu button was clicked
// Line 12 = Ending of function menu instructions

function showData() {
    var name = document.details.name.value
    var location = document.details.location.value
    console.log("You submitted the following in the form to an alert box", name, location)
    alert("My name is " + name + ' and my location is ' + location)
}

// Line 24 = Created a function to show the data from the form
// Line 25 = We are looking at the document for something with the name of details for a key of name and adding the value from it to the var called name
// Line 26 = We are looking at the document for something with the name of details for a key of location and adding the value from it to the var called location
// Line 27 = We are printing to the console a statement that includes the values that we have gathered
// Line 28 = We are taking those same values that we gathered and now adding them along with some strings to an alert box that will pop up.
// Line 29 = Ending of function showData instructions