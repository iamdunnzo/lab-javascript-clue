// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
      firstName: 'Courtney',
      lastName: 'Dunn',
      occupation: 'Engineer',
      age: 34,
      description: 'tall',
      image: 'some image',
      color: 'purple'

    },
    {
        firstName: 'Justin',
        lastName: 'Brown',
        occupation: 'Teacher',
        age: 32,
        description: 'short',
        image: 'clean cut',
        color: 'blue'
    },
    {
        firstName: 'Kristin',
        lastName: 'Brown',
        occupation: 'Sales', 
        age: 29,
        description: 'tallish',
        image: 'cute', 
        color: 'pink'
    },
    {
        firstName: 'Kyle',
        lastName: 'Brown',
        occupation: 'No job',
        age: 25,
        description: 'bum',
        image: 'ragedy',
        color: 'green'
    },
    {
        firstName: 'Aaron',
        lastName: 'Cason',
        occupation: 'Real Estate',
        age: 24,
        description: 'ugly',
        image: 'scruffy',
        color: 'red'
    },
    {
        firstName: 'Cameron',
        lastName: 'Cason',
        occupation: 'Student',
        age: 22,
        description: 'shorty',
        image: 'eh',
        color: 'yellow'
    }
];

// Rooms Array

const roomsArray = [
 {
    name: 'room 1'
 },
 {
    name: 'room 2'
 },
 {
    name: 'room 3'
 },
 {
    name: 'room 4'
 },
 {
    name: 'room 5'
 },
 {
    name: 'room 6'
 },
 {
    name: 'room 7'
 },
 {
    name: 'room 8'
 },
 {
    name: 'room 9'
 },
 {
    name: 'room 10'
 },
 {
    name: 'room 11'
 },
 {
    name: 'room 12'
 },
 {
    name: 'room 13'
 },
 {
    name: 'room 14'
 },
 {
    name: 'room 15'
 }
];

// Weapons Array

const weaponsArray = [
    {
        name: 'gun',
        weight: 2
    },
    {
        name: 'hammer',
        weight: 3
    },
    {
        name: 'knife',
        weight: 1
    },
    {
        name: 'sword',
        weight: 4
    },
    {
        name: 'fork',
        weight: 1
    },
    {
        name: 'saw',
        weight: 5
    },
    {
        name: 'brick',
        weight: 2
    },
    {
        name: 'bat',
        weight: 6
    },
    {
        name: 'taser',
        weight: 1
    }
];


// ITERATION 2

function selectRandom(array) {
    //get random index value
    const randomIndex = Math.floor(Math.random() * array.length);
    //get random item
    const item = array[randomIndex];
    return item;
}

function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }
    
}


// ITERATION 3

function revealMystery(suspect, weapon, room) {
    return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
}

