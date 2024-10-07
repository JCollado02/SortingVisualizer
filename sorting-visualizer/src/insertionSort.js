// insertionSort.js
export async function insertionSort(array, setArray, delay, setIsSorting) {
    setIsSorting(true); // Sorting starts
    let arr = array.slice(); // Create a copy to avoid mutating state directly

    for(var j = 1; j < arr.length; j++){
        var key = arr[j];
        // Insert A[j] into the sorted sequence A[1... j-1]
        var i = j - 1;

        // Move elements of arr[0...j-1] that are greater than key to one position ahead
        while(i >= 0 && arr[i] > key)
        {
            arr[i + 1] = arr[i];
            i = i - 1;

            // Update state and delay for visualization
            setArray(arr.slice());
            await delay(100); // Adjust delay as needed
        }
        arr[i + 1] = key;

        // Update state and delay after inserting the key
        setArray(arr.slice());
        await delay(100);
    }
    setIsSorting(false); // Sorting ends
  }
  