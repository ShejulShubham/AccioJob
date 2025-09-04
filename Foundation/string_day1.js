function myEndWith(check, ending){
    let n = check.length-1;

    for(let i = ending.length-1; i >= 0; i--){
        if(ending[i] !== check[n]){
            return false;
        }

        n--;
    }

    return true;
}


console.log(myEndWith("shubham", "bh"));