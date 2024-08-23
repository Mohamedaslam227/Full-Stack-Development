const fs=require('fs');
const regexPattern = /aa+/g;
fs.readFile('./Text.txt','utf-8', function(err,data)
{
    
  if(err)
  {
    console.error(err);
  }
  else{
    console.log("BEFORE REPLACE\n");
    console.log(data);
    console.log("\n\nAFTER REPLACE\n\n" );
    const content=data.replace(regexPattern,'b');
    console.log(content);

  
  fs.writeFile('./Text.txt',content,'utf-8',(err)=>
  {
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("\nwritten into file successfully");
    }

  });
}

});

/*const inputString = "This is a sample string with aaaa and some other text.";

const resultString = inputString.replace(regexPattern, 'b');
console.log("Original String:", inputString);
console.log("String with 'aa' replaced by 'b':", resultString);*/