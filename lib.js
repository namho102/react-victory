export function generateArray(size) {
    let arr = [];
    for(let i = 0; i < size; i++)
        arr.push(i + 1);
    
    return arr;    
}

export function generateData(size) {
    let arr = generateArray(size);
    let data = [];
    
    arr = shuffle(arr);
    
    for(let i = 0; i < arr.length; i++) {
        let obj = {x: i + 1, y: arr[i]};
        data.push(obj);
    }
    
    return data;
}

export function arrayToData(arr) {
    let data = [];
    
    for(let i = 0; i < arr.length; i++) {
        let obj = {x: i + 1, y: arr[i]};
        data.push(obj);
    }
    
    return data;
}

export function shuffle(arr) {
  var currentIndex = arr.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
}