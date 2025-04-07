(function() {
    let Sorting = {};

    function compare(a, b, ascending) {
        if (a === undefined) a = ascending ? Infinity : -Infinity;
        if (b === undefined) b = ascending ? Infinity : -Infinity;
        return ascending ? a - b : b - a;
    }
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    Sorting.bubbleSort = function(arr, ascending = true) {
        let comparisons = 0, swaps = 0, hasUndefined = false;
        let n = arr.length;
        let newArr = arr.slice();

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                comparisons++;
                if (newArr[j] === undefined || newArr[j + 1] === undefined) hasUndefined = true;
                if (compare(newArr[j], newArr[j + 1], ascending) > 0) {
                    swap(newArr, j, j + 1);
                    swaps++;
                }
            }
        }
        console.log(`\nМетод: Bubble Sort (${ascending ? "зростання" : "спадання"})`);
        console.log(`Результат: [${newArr.join(", ")}]`);
        console.log(`Статистика: Порівнянь: ${comparisons}, Обмінів: ${swaps}`);
        if (hasUndefined) console.log("Примітка: Виявлено undefined-елементи, оброблені як Infinity/-Infinity");
        console.log("----------------------------------------");
        return newArr;
    };
    Sorting.selectionSort = function(arr, ascending = true) {
        let comparisons = 0, swaps = 0, hasUndefined = false;
        let n = arr.length;
        let newArr = arr.slice();

        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < n; j++) {
                comparisons++;
                if (newArr[j] === undefined || newArr[minIdx] === undefined) hasUndefined = true;
                if (compare(newArr[j], newArr[minIdx], ascending) < 0) {
                    minIdx = j;
                }
            }
            if (minIdx !== i) {
                swap(newArr, i, minIdx);
                swaps++;
            }
        }
        console.log(`\nМетод: Selection Sort (${ascending ? "зростання" : "спадання"})`);
        console.log(`Результат: [${newArr.join(", ")}]`);
        console.log(`Статистика: Порівнянь: ${comparisons}, Обмінів: ${swaps}`);
        if (hasUndefined) console.log("Примітка: Виявлено undefined-елементи, оброблені як Infinity/-Infinity");
        console.log("----------------------------------------");
        return newArr;
    };
    Sorting.insertionSort = function(arr, ascending = true) {
        let comparisons = 0, swaps = 0, hasUndefined = false;
        let n = arr.length;
        let newArr = arr.slice();

        for (let i = 1; i < n; i++) {
            let key = newArr[i];
            let j = i - 1;
            if (key === undefined) hasUndefined = true;
            while (j >= 0) {
                comparisons++;
                if (newArr[j] === undefined) hasUndefined = true;
                if (compare(newArr[j], key, ascending) > 0) {
                    newArr[j + 1] = newArr[j];
                    swaps++;
                    j--;
                } else break;
            }
            newArr[j + 1] = key;
        }
        console.log(`\nМетод: Insertion Sort (${ascending ? "зростання" : "спадання"})`);
        console.log(`Результат: [${newArr.join(", ")}]`);
        console.log(`Статистика: Порівнянь: ${comparisons}, Переміщень: ${swaps}`);
        if (hasUndefined) console.log("Примітка: Виявлено undefined-елементи, оброблені як Infinity/-Infinity");
        console.log("----------------------------------------");
        return newArr;
    };
    Sorting.shellSort = function(arr, ascending = true) {
        let comparisons = 0, swaps = 0, hasUndefined = false;
        let n = arr.length;
        let newArr = arr.slice();

        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = newArr[i];
                let j = i;
                if (temp === undefined) hasUndefined = true;
                while (j >= gap) {
                    comparisons++;
                    if (newArr[j - gap] === undefined) hasUndefined = true;
                    if (compare(newArr[j - gap], temp, ascending) > 0) {
                        newArr[j] = newArr[j - gap];
                        swaps++;
                        j -= gap;
                    } else break;
                }
                newArr[j] = temp;
            }
        }
        console.log(`\nМетод: Shell Sort (${ascending ? "зростання" : "спадання"})`);
        console.log(`Результат: [${newArr.join(", ")}]`);
        console.log(`Статистика: Порівнянь: ${comparisons}, Переміщень: ${swaps}`);
        if (hasUndefined) console.log("Примітка: Виявлено undefined-елементи, оброблені як Infinity/-Infinity");
        console.log("----------------------------------------");
        return newArr;
    };
    Sorting.quickSort = function(arr, ascending = true) {
        let comparisons = 0, swaps = 0, hasUndefined = false;
        let newArr = arr.slice();

        function partition(low, high) {
            let pivot = newArr[high];
            let i = low - 1;
            if (pivot === undefined) hasUndefined = true;
            for (let j = low; j < high; j++) {
                comparisons++;
                if (newArr[j] === undefined) hasUndefined = true;
                if (compare(newArr[j], pivot, ascending) < 0) {
                    i++;
                    swap(newArr, i, j);
                    swaps++;
                }
            }
            swap(newArr, i + 1, high);
            swaps++;
            return i + 1;
        }
        function quick(low, high) {
            if (low < high) {
                let pi = partition(low, high);
                quick(low, pi - 1);
                quick(pi + 1, high);
            }
        }
        quick(0, newArr.length - 1);
        console.log(`\nМетод: Quick Sort (${ascending ? "зростання" : "спадання"})`);
        console.log(`Результат: [${newArr.join(", ")}]`);
        console.log(`Статистика: Порівнянь: ${comparisons}, Обмінів: ${swaps}`);
        if (hasUndefined) console.log("Примітка: Виявлено undefined-елементи, оброблені як Infinity/-Infinity");
        console.log("----------------------------------------");
        return newArr;
    };
    window.Sorting = Sorting;
})();