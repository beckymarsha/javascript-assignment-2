// 1. Write a [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop to add a click event listener on all divs with class `box`.

// 1. When the user clicks any box, change that box's background color to one of the following colors.

//     - If number of boxes on the page is between **201 and 300**, inclusive, change the background color of the box to **'yellow'**.

//     - If number of boxes on the page is between **301 and 400**, inclusive, change the background color of the box to **'green'**.

//     - If number of boxes on the page is between **401 and 500**, inclusive, change the background color of the box to **'purple'**.

//     - If number of boxes on the page is between **501 and 600**, inclusive, change the background color of the box to **'orange'**.

//     - If number of boxes on the page is between **601 and 700**, inclusive, change the background color of the box to **'pink'**.

//     - If number of boxes on the page is between **701 and 800**, inclusive, change the background color of the box to **'black'**.

//     - If number of boxes on the page is between **801 and 900**, inclusive, change the background color of the box to **'brown'**.

//     - Otherwise, change the background color of the box to **'blue'**.

var boxes = document.querySelectorAll('.box');

if boxes.

if (boxes.length < 301 && > 200) {
    console.log("There are more than four boxes")
    boxes[].style.backgroundColor = "yellow";
} else {
    console.log("There are five or fewer boxes")
}

function boxClicked(){
        console.log("Box clicked");
}

// switch (boxes.length) {
//     case 201-300:
//         boxes[201-300].style.backgroundColor = "yellow";
//         break;

//     case 2:
//         console.log("We have 2 boxes.");
//         break;

//     default:
//     console.log("Default");
//     boxes[0].style.marginLeft = 100 + "px";
//     boxes[1].style.backgroundColor = "blue";
//     break;
// }


for (var i = 0; i < boxes.length; i++) {
    console.log(i);
    boxes[i].addEventListener("click", boxClicked);
}