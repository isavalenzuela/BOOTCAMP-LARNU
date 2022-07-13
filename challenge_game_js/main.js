class Player {
  constructor(name, kind, lifePoints, attack1, attack2, defense1, defense2) {
    this.name = name; //nombre 
    this.kind = kind; //tipo
    this.lifePoints = lifePoints; //contador
    this.attack1 = attack1;
    this.attack2 = attack2;
    this.defense1 = defense1;
    this.defense2 = defense2;
  }

  getName() {
    return this.name;
  }

  getAttack(attack) {
    return attack;
  }

  getDefense(defense) {
    return defense
  }

  receiveDamage( damage ) {
    this.lifePoints -= damage
  }
}

let cat = new Player('Juanito', 'animal', 100, 12, 3, 10, 5)
let dog = new Player('Pedrito', 'animal', 80, 15, 5, 12, 5)

const attack = (defender, attackDamage) => {
  if(defender == 'cat') {
    defender = cat;
  } else {
    defender = dog
  }
  defender.receiveDamage(attackDamage)
  console.log(defender)
}

const initCombat = () => {
  const player1Name = document.getElementById("p1Name");
  player1Name.innerText = cat.getName()

  const player2Name = document.getElementById("p2Name");
  player2Name.innerText = dog.getName()
}

window.onload = function() {
  initCombat();
};