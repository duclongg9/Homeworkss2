class Person{
    name;
    sex;
    age;
    address;

    constructor(name,sex,age,address){
        this.name = name;
        this.sex =sex;
        this.address = address;
        this.age = age;
    }
    speak() {
        console.log('Hello world');
    }
    static introduce(){
        console.log(`
        My name is ${this.name}
        my sex is ${this.sex}
        I live in ${this.address}
        my age is ${this.age}
        
        `);
    }
}


class Crush extends Person {
    appearance;
    favourite;
    constructor(name,sex,address,age,appearance,favourite){
        super(name,sex,address,age);
        this.appearance = appearance;
        this.favourite = favourite;
    }
    speak() {
        console.log('Rat thich ay 😂😂');
    }
}


class oldGirlFriend extends Person{
    favourite;
    constructor(name,sex,address,age,favourite){
        super(name,sex,address,age);
        this.favorite = favourite;
    }
    speak() {
        console.log('La Ban Khong the yeu');
    }
}

class list {
    owner; 
    persons = [];
    constructor(owner, persons) {
        this.owner = owner;
        this.persons = persons;
    }
    showAll() {
        let person = this.persons;
        let i = 0;
        while (true) {
            if (person[i] !== undefined) {
                if (person[i].favourites == undefined) {
                    console.log(`old girl friend name: ${person[i].name}, Sex: ${person[i].sex}, Address: ${person[i].address},Age: ${person[i].age}, Appearance: ${person[i].appearance}`);
                } 
                else {
                    console.log(`Crush name: ${person[i].name}, Sex: ${person[i].sex}, Address: ${person[i].address},Age: ${person[i].age}, Favorite ${person[i].favourites}, Appearance: ${person[i].appearance}`);
                }
                i++;
            } 
            else break;
        }
    }
    addPerson(person) {
        if(person == "Crushh"){                                  
          alert('Input information Crush');
          let name = prompt('Name');
          let sex = prompt('Sex');
          let address = prompt('Address');
          let age = prompt('Age');
          let favourites = prompt('Favourite');
          let appearance = prompt('Appearance');
          let Crushh = new Crush(name,sex,address,age, favourites, appearance);
          this.persons.push(Crushh);
        }
        if(person == "oldGirlFriend"){
          alert('Input information oldGirlFriend');
          let name = prompt('Name');
          let sex = prompt('Sex');
          let address = prompt('Address');
          let age = prompt('Age');
          let appearance = prompt('Appearance');
          let oldGF = new oldGirlFriend(name,sex, address,age, appearance);
          this.persons.push(oldGF);
        }
    }
    
}

let input = prompt('Nhap Ok to Menu');
let persons = [];
let listPerson = new list(input, persons);
let check = true;
while (true) {
let key = prompt(
` 
chossen 1 see the list
chossen 2 create new crushh
chossen 3 create new oldGF`);
if (key == '1') {
listPerson.showAll();
} 
else if (key == '2') {
listPerson.addPerson("Crushh");
} 
else if (key == '3') {
listPerson.addPerson("oldGirlFriend");
} 
else { break }
}
console.log(persons[1]);


