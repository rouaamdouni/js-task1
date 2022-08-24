/function entierEnChaine(x){
   
    if(typeof(x)==="number"){
        return(console.log(`//resultat :${String(x)}`))
    }else{
        return(  console.log("la conversion est impossible"))
       
        
    }
}
entierEnChaine(56)
entierEnChaine(500)
entierEnChaine({x:'15'})*/


/function sommeTableau(T){
    let sum=0
    T.forEach(myFunction)
    function myFunction(item) {
        sum += item;
      }
    return(sum)
}
console.log(sommeTableau([1,2,3,4]))
console.log(sommeTableau([0,6,11,-8]))

function moyenneTableau(T){
    let n=T.length
   return( sommeTableau(T)/n )
}
console.log(moyenneTableau([1,2,3,4]))
console.log(moyenneTableau([0,6,11,-8]))*/

function getUserById(users, id) {
    //if(users.length!=0)
     let user = users.filter(u => u.id == id)
     console.log(user)*/
    if (users.legnth != 0) {
        for (let i= 0; i <=users.length; i++) {
        if(users[i].id==id){
            console.log(users[i]);
        } else{
            console.log("‘pas d’utilisateur avec cet ID’")
        }
        }
       
    }else{
        console.log("liste vide : id not found")
    }
}
T = [
    {
        id: 1,
        first: 'ahmed',
        last: 'ben ali',
        age: 23,
        email: 'ahmed.benali@gmail.com',
        address: 'Tunis'
    },
    {
        id: 2,
        first: 'aziz',
        last: 'ameri',
        age: 44,
        email: 'ahmed.benali@gmail.com',
        address: 'Tunis'
    },
    {
        id: 3,
        first: 'khalil',
        last: 'ben lamine',
        age: 18,
        email: 'ahmed.benali@gmail.com',
        address: 'Tunis'
    },
]
getUserById(T, 1)
getUserById(T, 2)
getUserById(T, 7)

function sortUsers(T) {
   let users= T.filter(u=>u.age)
   console.log(users)
}
T = [
    {
        id: 1,
        first: 'ahmed',
        last: 'ben ali',
        age: 23,
        email: 'ahmed.benali@gmail.com',
        address: 'Tunis'
    },
    {
        id: 2,

        first: 'aziz',
        email: 'ahmed.benali@gmail.com',
        last: 'ameri',
        age: 44,
        address: 'Tunis'
    },
    {
        id: 3,
        first: 'khalil',
        last: 'ben lamine',
        age: 18,
        email: 'ahmed.benali@gmail.com',
        address: 'Tunis'
    },
]
sortUsers(T)
