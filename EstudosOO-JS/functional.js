// Utilizando paradigma funcional em JavaScript
const { faker } = require('@faker-js/faker');

const Human = (name, age) => {
    return {
        name,
        age,
        greet(){
        return Math.random() > 0.5 ? `Hi ` : `Hello `;
    }
  }
};

const randomHuman = Human(faker.person.firstName(), faker.number.int({ min: 18, max: 99 }));

console.log(`${randomHuman.greet()}, I'm ${randomHuman.name}`);

const randomWizard = Human(faker.person.firstName(), faker.number.int({ min: 18, max: 150 }));

randomWizard.powers = [
    'Oculus Reparo', 
    'Alohomora', 
    'Wingardim Leviosa'
];

const showRandomPower = (powers = []) => {
   if (powers.length <= 0) {
    return "I haven't any power yet, but I'm learning at Hogwarts!";
    } else {
        const randomIndex = Math.floor(Math.random() * powers.length);
        return powers[randomIndex];
    }      
  };  

randomWizard.showRandomPower = showRandomPower;

console.log(`${randomWizard.greet()}, I'm ${randomWizard.name}, I'm a wizard.`);
console.log(`Here's one of my powers: ${randomWizard.showRandomPower(randomWizard.powers)}`);

const anotherRandomWizard = Human(faker.person.firstName(), faker.number.int({ min: 18, max: 150 }));

anotherRandomWizard.showRandomPower = showRandomPower;

console.log(`${anotherRandomWizard.greet()}, I'm ${anotherRandomWizard.name}, I'm a wizard too.`);
console.log(`${anotherRandomWizard.showRandomPower()}`);

const randomMineiro = Human(faker.person.firstName(), faker.number.int({ min: 18, max: 99 }));

randomMineiro.greet = () => 'Uai cê tá bão?';

console.log(`${randomMineiro.greet()}, me chamo ${randomMineiro.name}.`);

const randomCarioca = Human(faker.person.firstName(), faker.number.int({ min: 18, max: 99 }));

randomCarioca.greet = () => 'Fala aí mano, beleza?';

console.log(`${randomCarioca.greet()} Sou o vulgo ${randomCarioca.name}!`);