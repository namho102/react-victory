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

export function shuffle(arr) {
  var currentIndex = arr.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
}