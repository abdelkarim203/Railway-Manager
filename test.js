

<<<<<<< HEAD
const condidats = [{ nom : "oussama" , note : 15 }, 
    { nom : "lahsen" , note : 10  } , 
    { nom : "safaa" , note : 17 } , 
    { nom : "karim" , note : 14.50 } ,
    {nom : "reda" , note : 7 },
{ nom : "anouar" , note :9.50} ];

for ( let i = 0 ; i < condidats.length ; i++){
    if ( condidats[i].note >= 10){
        console.log(condidats[i].nom ,"Admis");
    }
    else {
        console.log(condidats[i].nom ,"Recale")
    }
}
=======
let arr = [ 2 , 5 , 3 , 7 , 9 ,  1 ,  12 , 0];
for ( i = 0 ; i < arr.length -1 ; i++){
    for ( j = 0 ; j < arr.length -1 -i ; j++){
        if ( arr[j] > arr[j+1] ){
            let temp = arr[j];
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
>>>>>>> b1cf0325c43ead71d89b9b62af42b7ac805db3c6
