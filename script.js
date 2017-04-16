boxes = document.getElementsByClassName('box');
console.log("Total number of boxes: " + boxes.length)

for (var i = 0; i < boxes.length; i++) {
    box = boxes[i];
    box.addEventListener('click', function() {
        if (this.className === "box") {
            this.className = "clickedBox";
        } else {
            this.className = "box";
        }

        if (boxes.length <= 301 && boxes.length >= 201) {
            this.style.backgroundColor = "yellow";
        } else if (boxes.length < 401 && boxes.length > 300) {
            this.style.backgroundColor = "green";
        } else if (boxes.length < 501 && boxes.length > 400) {
            this.style.backgroundColor = "purple";
        } else if (boxes.length < 601 && boxes.length > 500) {
            this.style.backgroundColor = "orange";
        } else if (boxes.length < 701 && boxes.length > 600) {
            this.style.backgroundColor = "pink";
        } else if (boxes.length < 801 && boxes.length > 700) {
            this.style.backgroundColor = "black";
        } else if (boxes.length < 901 && boxes.length > 800) {
            this.style.backgroundColor = "brown";
        } else {
            this.style.backgroundColor = "blue";
        }
    });
}