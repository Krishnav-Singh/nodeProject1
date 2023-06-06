const fs = require('fs');

fs.readFile('./example.txt', (err, data) => {
    if (err){
        console.log(err);
        //change the string from directly underneath(is case-sensitive)
    }else if(data.includes('Node')){
        console.log(true);
    } else{
        console.log(false);
    }
});

//use the terminal and type node main