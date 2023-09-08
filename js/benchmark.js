function shuffleArrayDurnstenfeld(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function shuffleArrayRNumber (array){
    let newArray = [];

  while (array.length != newArray.length) {
    let number = Math.floor(Math.random() * (array.length));
        if (!newArray.includes(array[number])) {
            newArray.push(array[number]);
        }

    }
    return newArray;

}
function shuffleArraySort(array) {
    let newArray = array;
    newArray.sort(() => Math.random() - 0.5);

    return newArray;
}
function shuffleArrayFY(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }