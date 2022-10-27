// there 4 types of error in javascript 
// reference error , type error , syntex error , internalError


//import evabeo kora jay jehetw okhane export kore felci tai direct import korbo
import two from "./5.ErrorHandler" //emnitwo kora jabe 

//import from from

//ei errorhandler and two asce hocce ErrorHandler.js theke 
const {errorHandler,two} =require("./5.ErrorHandler.js")
two()
async function getData(){
    try{
        // undefined.find();

        const emailError =  new Error("Email already taken ");
        throw emailError;

    }catch(error){
        // console.log("this is problem ")
        // console.log(error)
        errorHandler(error)
    }

}

getData()



// etake ekhon Errorhandler e copy kore okhan theke export kore dici 
//  ekhon ami caile ekhane eta use korte parbo 

// function errorHandler(error){
    
//     const {name, message,stack} = error;
//     console.log(name,message,stack)
//     // logger.error mane globaly dekhte parbo
//     // logger.error({
//     //     name,
//     //     message,
//     //     stack,
        
//     // });


//     // console.log("internal server error");

// }
console.log("done ")