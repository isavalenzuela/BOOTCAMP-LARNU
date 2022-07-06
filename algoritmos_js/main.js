console.log('problema convertido en algoritmo');

//un boxeador quiere practicar sparring pero necesita
//encontrar a alguien que esté en su nivel para que 
//ambos se beneficien del entrenamiento

// se debe validar el nivel

let boxer = {
  name: 'Mike Tyson',
  level: 3,
  sparring: true
}

const boxer2 = {
  name: 'Canelo Alvarez',
  level: 3,
  sparring: false
}

const boxer3 = {
  name: 'Vasiliy Lomachenko',
  level: 3,
  sparring: true
}


if (boxer.sparring) {
  console.log(`${boxer.name} quiere hacer sparring`);
  let boxerLevel = boxer.level;
  console.log(boxerLevel);
    if ( boxer2.level || boxer3.level == boxerLevel) {
      console.log(`puedes entrenar con ${boxer2.name} o con ${boxer3.name} `)
    } else {
      console.log('no hay ningún boxeador con tu nivel para hacer sparring');
    }
} else {
  console.log('no hay boxeadores disponibles para sparring');
}


//un boxeador quiere practicar sparring pero necesita
//encontrar a alguien que esté en su nivel para que 
//ambos se beneficien del entrenamiento y que esté
//disponible el mismo día

// se debe validar el nivel
// se debe validar el día
/* 
let boxer = {
  name: 'Mike Tyson',
  level: 3,
  activeDays: [
    'wednesday'],
  sparring: true
}

const boxer1 = {
  name: 'Muhammad Ali',
  level: 4,
  activeDays: [
    'wednesday',
    'thursday'],
  sparring: true
}

const boxer2 = {
  name: 'Canelo Alvarez',
  level: 3,
  activeDays: [
    'wednesday',
    'thursday'],
  sparring: false
}

const boxer3 = {
  name: 'Vasiliy Lomachenko',
  level: 3,
  activeDays: [
    'wednesday',
    'thursday',
    'friday'],
  sparring: true
  }

let boxersArray = [boxer1, boxer2, boxer3];

if (boxer.sparring) {
  console.log(`${boxer.name} quiere hacer sparring`);
  if (boxersArray.length > 0) {
    console.log('existen boxeadores disponibles');
    let boxerLevel = boxer.level;
    console.log(boxerLevel);
    let availableOpponents = []
    console.log(availableOpponents);
    for ( let i = 0; i < boxersArray.lenght; i++) {
      if (i[level] === boxerLevel) {
        availableOpponents += availableOpponents.join;
        if (availableOpponents == 0) {
          console.log('no hay boxeadores disponibles en tu nivel')
        }
      } else {
        console.log(availableOpponents)
      }
    }
  } else {
    console.log('no hay boxeadores disponibles para sparring');
  }

} else {
  console.log('nadie quiere hacer sparring');
}
 */