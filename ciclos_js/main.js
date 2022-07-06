console.log("Ejercicio de Ciclos en JS");

console.log("Ciclos for y while con continue y break");

// cuánta comida debe comer un gato al día

let catName = 'Cósmico';
let timesFed = 0;

for (let i = 0; i < 5; i++) {
  //esto es innecesario si empezamos con i == 1
  if ( i == 0 ) {
    continue
  }
  if ( i < 4 ) {
    timesFed++;
    console.log(`${catName} cat is still hungry, he only had food ${timesFed} times today`)
    continue
  }
  if ( timesFed == 3 ) {
    console.log(`Stop giving him food, ${catName} can't have food ${i} times a day`)
    break
  }
}

// cuantos kilometros puede caminar un gato

let runningCat = true;
let dog = Math.floor(Math.random() * 20) + 1;
let kmCounter = 0;
let dogAlert = '';

while (runningCat) {
  console.log(`${catName} cat has run ${kmCounter} kilometers`)
  kmCounter++;
  if ( kmCounter == dog ) {
    console.log(`A dog has appeared at ${kmCounter} kilometers, game is over ${catName}`)
    runningCat=false;
    break
  }
}