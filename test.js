

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