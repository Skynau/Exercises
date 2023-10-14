// Exercise
// Create a new file functions.html in your exercises/javascript folder and put some basic HTML into it.

// Create a new file js/functions.js (relative to your HTML file) and link it to your HTML document.

// Put the following HTML into the body of the document:

// <h1 id="headline">What will we learn today?</h1>
// In the functions.js file, write a JS function set_headline that would change the headline's contents to 'Javascript functions'

// Create a button that would call that function using its onclick attribute.




//here I let the brackets empty bcs realised they dont need any arguments instead of tryingt to
//fit in the document.getelementbyid(headline) that I thought have to use as argument

const set_headline = () => {
    let element = document.getElementById('headline');
    element.innerHTML = 'Javascript functions';
}

// Write a function that:

// accepts 2 arguments: the id attribute of an element and a text string. Name the parameters accordingly.
// when called, finds the element with that particular id and changes its contents to the text string.
// Create another button that will change the headline to '...and JavaScript events' using this new function.

//second bellow was in the end easier, now you do need the arguments

const findElement = (ID, text) => {
    let tag = document.getElementById(ID);
    tag.innerHTML = text;
}

    
