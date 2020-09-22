function checkStr(str1,str2){

    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    if(str1.length != str2.length) {
        console.log(false);
    }
    else if(str1 === str2) {
        console.log(true);
    }
    else{
        console.log(false);
    }
    
}   checkStr('abcxyz' , 'acbyxz');
    checkStr('axbycz' , 'ybcxyz');
    checkStr('abcdef' , 'acacac');
    checkStr('abcd','cdba');
