let characters=['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];
for (let i=0; i<characters.length; i++) {
    console.log(characters[i]);
}

let firstName = 'Harry';
let house = 'Gryffindor';

console.log(`Welcome, ${firstName} of ${house}!`);


let characterName = 'Hermione';
console.log(characterName.toLowerCase()); 
console.log(characterName.toUpperCase());


let spell= 'expelliarmus';
console.log(spell.trim())


let quote = 'I solemnly swear that I am up to no good';
console.log(quote.slice(10, 15)); 


let firstName1='Ron'
let lastname='Weasley'
console.log(firstName1.concat('', lastname))



let sentence = 'Draco is a good wizard';
console.log(sentence.replace('good', 'bad')); 


let houses= ['Gryffindor', 'Hufflepuff', 'Ravenclaw']
houses.push('Slytherin')
houses.pop()
console.log(houses)


let spells= ['Alahomora', 'Lumos', 'Nox']
spells.unshift('Accio')
spells.shift()
console.log(spells)


let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
let selectedProfessors = professors.slice(1, 3);
console.log(selectedProfessors); 


let students= ['Neville', 'Seamus', 'Dean', 'Parvati']
students.splice(1,2)
console.log(students)


let phrase= 'Mischief Managed '
console.log (phrase.trim().toLowerCase().concat('-Harry'))


let message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
let result = message.slice(11, 19).concat(' Castle');
console.log(result); 
