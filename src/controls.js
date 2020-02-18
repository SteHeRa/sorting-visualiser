document.getElementById("bubble-sort").addEventListener('click', setBubble);
document.getElementById("quick-sort").addEventListener('click', setQuick);
document.getElementById("sortBtn").addEventListener('click', sort);
document.getElementById("resetBtn").addEventListener('click', generateBars);

function generateBars () {
    cols = [];
    while (chart.firstChild) {
      chart.removeChild(chart.firstChild);
    }
    for(let i=0; i<slider.value; i++){      // Generating new bars when slider is moved
        let newCol = document.createElement('div');
        let newColValue = Math.floor(Math.random() * 700) + 1;
        cols[i] = new bar (newColValue, i, false, false);
        newCol.id = i;
        newCol.style.height = `${newColValue}px`;
        newCol.style.width = `${((windowWidth*0.6)-(slider.value*2))/slider.value}px`;  //adapting the width of the colums to the number of columns there are
        document.getElementById("chart").appendChild(newCol);                       //so that it fits into the 'container' which is 60% of the window
        }
}

let cursor = {
    bubbleSort: false,
    quickSort: false,
};

function setBubble() {
    cursor.bubbleSort = true;
    cursor.quickSort = false;
    document.getElementById("dropdownMenuButton").innerHTML = "Bubble Sort";
    console.log(cursor);
}

function setQuick() {
    cursor.bubbleSort = false;
    cursor.quickSort = true;
    document.getElementById("dropdownMenuButton").innerHTML = "Quicksort";
    console.log(cursor);
}

function sort() {

    if (cursor.bubbleSort === true) {
        let sortedArray = bubbleSort(cols);
        console.log(sortedArray);
    }

    if (cursor.quickSort === true) {
        quickAnimations.length = 0; //Resetting the array of animations each time quick sort is run
        //CALLING QUICKSORT
        let sortedArray = quickSort(cols, 0, cols.length-1);
        console.log(sortedArray);
        //RUNNING ANIMATIONS
        for(i=0; i<quickAnimations.length; i++) {
            if (i % 2 == 0) {
                quickAnimate(quickAnimations, i);
            }
        }
        setTimeout( () => {
            for(j=0; j < quickAnimations.length; j++) {       //This for loop runs once all animations are completed and recolours all the bars.
                    document.getElementById(quickAnimations[j]).style.backgroundColor = "cornflowerblue";
            }
        }, (10 * quickAnimations.length) + 10);
    }
}