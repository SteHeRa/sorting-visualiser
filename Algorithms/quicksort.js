//FUNCTION FOR SWAPPING ELEMENTS IN ARRAY

function swap(array, leftIndex, rightIndex) {
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}

//FUNCTION FOR CHOOSING PIVOT AND PUTTING BIGGER ELEMENTS TO THE RIGHT AND SMALLER ELEMENTS TO THE LEFT

function partition(array, left, right) {
    var pivot   = array[Math.floor((right+left) / 2)], //middle element
        i       = left,     //left pointer
        j       = right;    //right pointer

    while (i <= j) {                //While i and j have not yet met in the middle of the array
        while(array[i] < pivot) {   //If value of array[i] is less than the pivot value leave
            i++;                    //it where it is and move on to the next one
        }
        while(array[j] > pivot) {   //If value of array[j] is greater than the pivot value leave
            j--;                    //it where it is and move on to the next one
        }
        if (i <= j) {           //If we are at this line of code we know that array[i] and array[j]
            swap(array, i, j);  //are on the wrong sides of the pivot so we swap them
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