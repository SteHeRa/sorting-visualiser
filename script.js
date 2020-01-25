let colCount = 100
let windowWidth = window.innerWidth;

var slider = document.getElementById("colCount");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

for(let i=0; i<colCount; i++){
    let newCol = document.createElement('div');
    let newColValue = Math.floor(Math.random() * 300) + 1;
    newCol.style.height = `${newColValue}px`;
    newCol.style.width = `${((windowWidth*0.6)-(colCount*2))/colCount}px`
    document.getElementById("chart").appendChild(newCol);
}