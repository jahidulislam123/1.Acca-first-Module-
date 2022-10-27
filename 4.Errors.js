// there 4 types of error in javascript 
// reference error , type error , syntex error , internalError

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



function errorHandler(error){
    
    const {name, message,stack} = error;
    console.log(name,message,stack)
    // logger.error mane globaly dekhte parbo
    // logger.error({
    //     name,
    //     message,
    //     stack,
        
    // });


    // console.log("internal server error");

}
console.log("done ")