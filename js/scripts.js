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


function calculator() {
    var grade1=parseFloat(document.getElementById('qtr1').value);
    var grade2=parseFloat(document.getElementById('qtr2').value);
    var grade3=parseFloat(document.getElementById('qtr3').value);
    var grade4=parseFloat(document.getElementById('qtr4').value);
    var sum=grade1+grade2+grade3+grade4;
    var total=sum/4
    console.log("Grades entered", grade1, grade2, grade3, grade4)
    console.log("Sum of all grades", sum)
    console.log("The final total/average", total)
    var display=document.getElementById('outputh4');
    display.innerHTML='Your Final Grade Is: ' +total;
    var color = document.querySelector('h4')
    if (total >= 90) {
        color.style.color = "green"
    } else if (total >= 80) {
        color.style.color = "orange"
    } else if (total >= 70) {
        color.style.color = 'red'
    } else {
        color.style.color = 'black'
    }
}

// Line 39 = creating the function called calculator
// Line 40-43 = creating the variables for the 4 grades to be entered by selecting them by their id and changing the format back to a integer from a string
// Line 44 = creating the sum var and adding all the grades together
// Line 45 = calculating the average in a var called total
// 46-48 = Printing to the console all the grades, the sum and the final total
// Line  49 = creating a var named display and selecting the h4 element
// Line 50 = Adding to the h4 element the string and the final total
// Line 51 = creating a var called color and selecting the same element
// Line 52-59 = Creates a conditional that based on what the value of total is will change the text color
// Line 60 = Ends our conditional
// Line 61 = Ends our function