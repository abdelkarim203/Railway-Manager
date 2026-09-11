

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
