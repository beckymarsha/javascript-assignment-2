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
console.log("Total number of boxes: " + boxes.length)

for (var i = 0; i < boxes.length; i++) {
    unclickedBoxes = boxes[i];
    unclickedBoxes.addEventListener('click', function () {
        if (this.className === "unclickedBoxes") {
            this.className = "clickedBox";
        } else {
            this.className = "unclickedBoxes";
        }

        if (boxes.length <= 301 && boxes.length >= 201) {
            console.log("less then 301, more than 200")
            this.style.backgroundColor = "yellow";
        }
        else if (boxes.length < 401 && boxes.length > 300) {
            console.log("less then 401, more than 300")
            this.style.backgroundColor = "green";
        }
        else if (boxes.length < 501 && boxes.length > 400) {
            console.log("less then 501, more than 400")
            this.style.backgroundColor = "purple";
        }
        else if (boxes.length < 601 && boxes.length > 500) {
            console.log("less then 601, more than 500")
            this.style.backgroundColor = "orange";
        }
        else if (boxes.length < 701 && boxes.length > 600) {
            console.log("less then 701, more than 600")
            this.style.backgroundColor = "pink";
        }
        else if (boxes.length < 801 && boxes.length > 700) {
            console.log("less then 701, more than 600")
            this.style.backgroundColor = "black";
        }
        else if (boxes.length < 901 && boxes.length > 800) {
            console.log("less then 701, more than 600")
            this.style.backgroundColor = "brown";
        }
        else {
            console.log("default")
            this.style.backgroundColor = "blue";
        }

    }