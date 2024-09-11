//{
    //const { error } = require('console');
    
    //const fs = require('fs').promises;
    //fs.readFile('file.txt', 'utf8').then((data) => {console.log("File content:",data);
     //when the file is read succesfully   
    //})
    //.catch((err) => {
      //  console.error("Error in reading the file:",err);//if there is an error occur
    //})
    
    //console.log("This runs immediately before the file starts reading,");
    //}
    
    // {
    //     doTask()
    //     .then(result => 
    //         doTask2 (result1))
    //         .then(result => 
    //             doTask3(result2))
    //             .then(result =>
    //                 console.log(result3))
    //                 .catch(err =>
    //                     console.error(err));
                    
    // }
    
    //{
        //doTask()
      //.then(result1 => 
        //  doTask2(result1))  // Pass result1 to doTask2
      //.then(result2 => 
        //  doTask3(result2))  // Pass result2 to doTask3
      //.then(result3 => 
         // console.log(result3))  // Output result3
     // .catch(err => 
       //   console.error(err));  // Handle errors
    
   // }
    

    // 
    {
        const fs = require('fs').promises;
      
        fs.readFile('file.txt', 'utf8')
          .then((content) => {
            console.log("File content:", content); // Success
          })
          .catch((error) => {
            console.error("Error reading the file:", error); // Error
          })
          .finally(() => {
            console.log("File read operation finished.");
          });
      
        console.log("This will execute before the file starts reading.");
      }
      