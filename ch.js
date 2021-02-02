const student = [
    {id: 21, name:"Omar sunny"},
    {id: 32, name:"vara"},
    {id:21, name:"anika"},
    {id:12, name:"suhu"},
    {id:14, name:"inhab"},
    
]
let newArray = []
for(let i = 0; i<student.length; i++){
    let element = student[i]
    let find = element.name
    newArray.push(find)
    // console.log(newArray)
// }
// console.log(newArray)

// let number = Math.random()*10000
// let four = Math.round(number)
// console.log(four)
function getPin (){
    const random = Math.random()*10000;
    const pin = (random + " ").split ('.')[0];
    // console.log(pin)
   if( pin.length === 4){
       return pin;
   }
   else { return getPin ()}
}