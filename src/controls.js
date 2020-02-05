document.getElementById("bubble-sort").addEventListener('click', setBubble)
document.getElementById("quick-sort").addEventListener('click', setQuick)
document.getElementById("sortBtn").addEventListener('click', sort);

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
        var sortedArray = bubbleSort(cols);
        console.log(sortedArray);
    }

    if (cursor.quickSort === true) { 
    //CALLING QUICKSORT
    var sortedArray = quickSort(cols, 0, cols.length-1);
    // console.log(sortedArray);
    console.log(quickAnimations);
    console.log(sortedArray);
    }

    // for (i=0; i < 50; i++) {
    //     document.getElementById(sortedArray[i].index).style.height = `${sortedArray[i].value}px`
    // }
}