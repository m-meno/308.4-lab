
let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`


cell1 = ``;
cell2 = ``;
cell3 = ``;
cell4 = ``;
let commas = 0;
//ALL OF THE LOGIC HAPPENS INSIDE THE LOOP//


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
        if(i === str.length-1) console.log(cell1, cell2, cell3, cell4)
    }                       // i and the str.length will never be equal   because index and starting at 0 with 1! 
}


