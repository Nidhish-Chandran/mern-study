var person={
    name:'Nidhish',
    age:26,
    place:'pattazhy',
    display:function(){
        console.log(this.name)
    }
}

console.log(person)
console.log(person['name'])
console.log(person.place)
person.display()

// for (x in person){
//     console.log(x)
// }

// for (x in person){
//     console.log(person[x])
// }