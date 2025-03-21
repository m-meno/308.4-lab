
//Part 1.
let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`


cell1 = ``;
cell2 = ``;
cell3 = ``;
cell4 = ``;
let commas = 0;
// //ALL OF THE LOGIC HAPPENS INSIDE THE LOOP//


for(let i = 0; i < str.length; i++){    
    // how to calculate number of columns?
    if(str[i] === `,`){
        commas++;
    }   else if(str[i] === `\n`){
        console.log(cell1, cell2, cell3, cell4);    
        commas = 0;
        cell1 = ``
        cell2 = ``
        cell3 = ``
        cell4 = ``
    }   else { //any other char - we need logic in order to sort these characters into the correct cells
        if (commas === 0){
            cell1 += str[i];
        }  else if (commas === 1){
            cell2 += str[i];
        }   else if (commas ===2){
            cell3 += str[i];
        }   else {
            cell4 += str[i];
        }
        if(i === str.length -1) console.log(cell1, cell2, cell3, cell4)
    
    }                       // i and the str.length will never be equal   because index and starting at 0 with 1! 
}


let col1 = [`ID`, `42`, `57`, `63`, `98`]
let col2 = [`Name`, `Bruce`, `Bob`, `Blaine`, `Bill`]
let col3 = [`Occupation`, `Knight`, `Fry Cook`, `Quiz Master`, `Doctor's Assistant`]
let col4 = [`Age`, `41`, `19`, `58`, `26`]


let i = 0

for (let i = 0; i < col1.length; i++){
    let col1Str = col1[i]+= ` `
    let col2Str = col2[i] += ` `
    let col3Str = col3[i] += ` `
    let col4Str = col4[i] += ` `
    console.log(col1Str, col2Str, col3Str, col4Str)
}
//Attempt at part .2 (I know it is wrong)


row1 = [`ID`, `Name`, `Occupation`, `Age`]
row2 = ["42", "Bruce", "Knight", "41"]
row3 = ["57", "Bob", "Fry Cook", "19"]
row4 = ["63", "Blaine", "Quiz Master", "58"]
row5 = ["98", "Bill", "Doctor’s Assistant", "26"]



const parentArray = [row1, row2, row3, row4, row5]
console.log(parentArray)

//Part 3.

// [["ID", "Name", "Occupation", "Age"],
//  ["42", "Bruce", "Knight", "41"],
//  ["57", "Bob", "Fry Cook", "19"],
//  ["63", "Blaine", "Quiz Master", "58"],
//  ["98", "Bill", "Doctor’s Assistant", "26"]]
// becomes
// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]

const row1 = {
    id: `42`,
    name: `Bruce`,
    occupation: `Knight`,
    age:`41`,
}

const row2 = {
    id: `57`,
    name: `Bob`,
    occupation: `Fry Cook`,
    age: `19`,
}

const row3 = {
    id: `63`,
    name: `Blaine`,
    occupation: `Quiz Master`,
    age: `58`,
}

const row4 = {
    id: `98`,
    name: `Bill`,
    occupation: `Doctor's Assistant`,
    age: `26`,
}

let table = [row1, row2, row3, row4]
// console.log(table)

// Part 4. 

let lastElement = table.pop();

// console.log(table)

let addIndex1 = table.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
console.log(table)

let addLastElement = table.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

console.log(table)

// // Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

let array =
[
    { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
    { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
    { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
    { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
    { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
  ]

let sum = 0;
for (let i = 0; i < array.length; i++){
    let allAges = (array[i].age +=` `); 
    let numAllAges = Number(allAges)
    sum += numAllAges
    let averageAge = (sum / array.length)
    console.log(averageAge)
    
}


//5.

let parentArray =
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

let i = ` `
for (let i = 0; i < parentArray.length; i++){           //{ id: '42', name: 'Bruce', occupation: 'Knight', age: '41' }
                                                        // { id: '48', name: 'Barry', occupation: 'Runner', age: '25' }
                                                        // { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' }
                                                        // { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' }
                                                        // { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
    let objects = parentArray[i]
    JSON.stringify(objects)
    
    console.log(objects)
}