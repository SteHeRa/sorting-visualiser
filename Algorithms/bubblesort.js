function bubbleSort(array) {

    let bubbleAnimations = [];
    bubbleAnimations.length = 0;
        /*Above we are initialising array to store bars that need to be animated - in order
        right before a swap is performed in the bubble sort algorithm,
        we push the indexes of the two elements that are getting swapped into the bubbleAnimations array.
        We colour the two div elements (bars) and swap the div elements heights. */

    for (i=0; i < array.length - 1; i++) {      //bubble sort happens in this for loop
        for (j=0; j < array.length - i - 1; j++) {
            if(array[j].value > array[j+1].value) {
                bubbleAnimations.push(array[j].index, array[j+1].index);        //populating the array that will be used to animate bubble sort
                swap(array, j, j+1);    //swap function is defined in quicksort.js
            }
        }
    }
    console.log(bubbleAnimations)
    for (i=0; i < bubbleAnimations.length - 1; i++) {
        bubbleAnimate(bubbleAnimations, i); //call to bubble sort, for loop is used in tandem with setTimeout (below) for timing of animations.
        i++;                                 //i++ here because of the way the array is organised, each animation requires 2 elements so we move i forward by 2 each time...
    }
    
    setTimeout( () => {
        for(j=0; j < bubbleAnimations.length - 1 ; j++) {       //This for loop runs once all animations are completed and recolours all the bars.
                document.getElementById(bubbleAnimations[j]).style.backgroundColor = "cornflowerblue";
        }
    }, (10 * bubbleAnimations.length) + 10);
    return array;
}

function bubbleAnimate (array, i) {
    setTimeout( () => {
        for(j=0; j < array.length - 1 ; j++) {
            if (array[j] !== array[i] || array[j] !== array[i+1]) {
                document.getElementById(array[j]).style.backgroundColor = "cornflowerblue"; //unhighlight bars after they've been swapped
            }
        }
        if (array[i] + 1) {
            document.getElementById(array[i]).style.backgroundColor = "yellow";     //highlight bars that a being swapped
            document.getElementById(array[i+1]).style.backgroundColor = "yellow";   //highlight bars that a being swapped
            temp = document.getElementById(array[i]).style.height;
            document.getElementById(array[i]).style.height = `${document.getElementById(array[i+1]).style.height}`; //swap heights of div elements
            document.getElementById(array[i+1]).style.height = `${temp}`;
        }
    }, 10 * i);
}