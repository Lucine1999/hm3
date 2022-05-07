let arr = [3, 4, 1, 2, -7, -5, -6, 3, 1, 0, -1, -100, 1000, 1500, 99, 88];

///Variant 1///

const map1 = new Map();
const currentArr = [...arr];

arr.map((elem, index) => {
    const minNumber = Math.min(...currentArr);

    map1.set(index, minNumber);

    if (currentArr.indexOf(minNumber) > -1) {
        currentArr.splice(currentArr.indexOf(minNumber), 1);
    }
});

console.log(Array.from(map1.values()));

///Variant 1///

///Variant 2///

const min = Math.min(...arr);
const max = Math.max(...arr);
const sortedArr = [];

const map2 = new Map();

for (let i = min; i <= max; i++) {
    map2.set(i, 0);
}

for (let i = 0; i < arr.length; i++) {
    if (map2.has(arr[i])) {
        let lastValue = map2.get(arr[i]);
        map2.set(arr[i], (lastValue += 1));
    }
}

for (const [key, value] of map2) {
    if (value >= 1) {
        for (i = 0; i < value; i++) {
            sortedArr.push(key);
        }
    }
}
console.log(sortedArr);

///Variant 2///
