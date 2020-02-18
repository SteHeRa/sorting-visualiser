let quickAnimations = [];
    /*Above we are initialising array to store bars that need to be animated - in order
    right before a swap is performed in the bubble sort algorithm,
    we push the indexes of the two elements that are getting swapped into the bubbleAnimations array.
    We colour the two div elements (bars) and swap the div elements heights. */

//FUNCTION FOR SWAPPING ELEMENTS IN ARRAY

function swap(array, leftIndex, rightIndex) {
    var tempIndex = array[leftIndex].index;             //we swap the index property of the column/bar object,
    array[leftIndex].index = array[rightIndex].index;   //this helps keep track of what we're targeting
    array[rightIndex].index = tempIndex;                //when it comes to animating.
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];               //this is swapping the actual objects in the array.
    array[rightIndex] = temp;
}

//FUNCTION FOR CHOOSING PIVOT AND PUTTING BIGGER ELEMENTS TO THE RIGHT AND SMALLER ELEMENTS TO THE LEFT

function partition(array, left, right) {
    var pivot = array[Math.floor((right+left) / 2)].value; //middle element
    var i = left;     //left pointer
    var j = right;    //right pointer

    while (i <= j) {                //While i and j have not yet met in the middle of the array
        while(array[i].value < pivot) {     //If value of array[i] is less than the pivot value leave
            i++;                            //it where it is and move on to the next one
        }
        while(array[j].value > pivot) {     //If value of array[j] is greater than the pivot value leave
            j--;                            //it where it is and move on to the next one
        }
        if (i <= j) {           //If we are at this line of code we know that array[i] and array[j]
                                //are on the wrong sides of the pivot so we swap them
            swap(array, i, j);
            quickAnimations.push(array[i].index, array[j].index);    //populating the array that will be used to animate Quicksort
            i++;
            j--;
        }
    }
    return i;
}

//Implement recursion for unsorted left and right halves until whole array is sorted
function quickSort(array, left, right) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right);  //index of left pointer is returned from partition function
                                                //we use this index to divide the array and then perform quick sort again on the divided sections.
        if (left < index - 1) { //if the index is not yet at the left most element
            quickSort(array, left, index -1);   //perform quicksort on that section
        }
        if (index < right) {    //if the index is not yet at the right most element
            quickSort(array, index, right);     //perfrom quicksort on that section
        }
    }
    return array;
}

//FUNCTION FOR ANIMATING QUICKSORT FUNCTION

function quickAnimate(array, i) {

    setTimeout( () => {
        for(j=0; j < array.length - 1 ; j++) {
            if (array[j] !== array[i] || array[j] !== array[i+1]) {
                document.getElementById(array[j]).style.backgroundColor = "cornflowerblue"; //unhighlight bars after they've been swapped
            }
        }
        if (array[i] + 1) {
            document.getElementById(array[i]).style.backgroundColor = "yellow";     //highlight bars that a being swapped
            document.getElementById(array[i+1]).style.backgroundColor = "yellow";   //highlight bars that a being swapped
            tempHeight = document.getElementById(array[i]).style.height;
            document.getElementById(array[i]).style.height = document.getElementById(array[i+1]).style.height; //swap heights of div elements
            document.getElementById(array[i+1]).style.height = tempHeight;
        }
    }, 10 * i);
}