const { faker } = require('@faker-js/faker');
// O faker é uma biblioteca que gera dados falsos, como nomes, endereços, etc.
// Entretanto, o faker ensinado no yt é o antigo, e o novo é @faker-js/faker
// A biblioteca @faker-js/faker é uma versão atualizada e mantida do Faker.js
// Para instalar, use o comando: npm install @faker-js/faker

class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
    } // Atributos da classe

    greet(){
        return Math.random() > 0.5 ? `Hi ` : `Hello `;
    }
};

const randomHuman = new Human(
    faker.person.firstName(), 
    faker.number.int({ min: 18, max: 99 })
);
// Aqui também teve mudanças o faker.name não existe mais, agora é faker.person.firstName()
// faker.datatype.number() não existe mais, agora é faker.number.int()
// Escolhi um número aleatório entre 18 e 99 para a idade, pois explora melhor o conceito de idade

console.log(`${randomHuman.greet()}, I'm ${randomHuman.name}`);


class Wizard extends Human {
    constructor(name, age, powers = []){
        super(name, age);
        this.powers = [...powers];
    }

    showRandomPower() {
        
        if (this.powers.length <= 0) {

            return "I haven't any power yet, but I'm learning at Hogwarts!";

        } else {
            const randomIndex = Math.floor(Math.random() * this.powers.length);
            return this.powers[randomIndex];
        }      
    }   
}

const randomWizard = new Wizard(
    faker.person.firstName(),
    faker.number.int({ min: 18, max: 150 }),
    [
        'Lunux Maximus',
        'Expecto Patronum',
        'Avada Kedavra',
    ]
);

console.log(`${randomWizard.greet()}, I'm ${randomWizard.name}, I'm a wizard.`);
console.log(`Here's one of my powers: ${randomWizard.showRandomPower()}`);

const anotherRandomWizard = new Wizard(
    faker.person.firstName(),
    faker.number.int({ min: 18, max: 150 }),
);

console.log(`${anotherRandomWizard.greet()}, I'm ${anotherRandomWizard.name}, I'm a wizard too.`);
console.log(`${anotherRandomWizard.showRandomPower()}`);

class Mineiro extends Human {
    constructor(name, age) {
        super(name, age);
    }

    greet() {
        return 'Uai cê tá bão?';
    }
};

const randomMineiro = new Mineiro(
    faker.person.firstName(),
    faker.number.int({ min: 18, max: 99 })
);

console.log(`${randomMineiro.greet()}, me chamo ${randomMineiro.name}.`);

class Carioca extends Human {
    constructor(name, age) {
        super(name, age);
    }

    greet() {
        return 'Fala aí mano, beleza?';
    }
};

const randomCarioca = new Carioca(
    faker.person.firstName(),
    faker.number.int({ min: 18, max: 99 })
);

console.log(`${randomCarioca.greet()} Sou o vulgo ${randomCarioca.name}!`);
 