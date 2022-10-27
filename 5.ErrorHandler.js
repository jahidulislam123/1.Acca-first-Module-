console.log(module);



//arekta vabe export kora jay
// module.exports.errorHandler=fu.......

//export func...... evabeo kora jabe type module deoar karone
function errorHandler(error){
    
    const {name, message,stack} = error;
    console.log(name,message)
    // logger.error mane globaly dekhte parbo
    // logger.error({
    //     name,
    //     message,
    //     stack,
        
    // });


    // console.log("internal server error");

}


//module.export.two=func............
function two(){
    console.log("two mama kemon aco vai")
}

//nicer ta matro ekbar ekta file ba object pathanor jonno 
//erar nam defaul export
module.exports=errorHandler;


// etar nam name the export
// jodi eker odhik file ba function thake thoele jevabe pathabo 
module.exports.errorHandler =errorHandler;
module.exports.two=two;


// ba onno vabeo pathabo jay
module.exports ={
    errorHandler:errorHandler,
    two:two,
}

// ba emneo pathano jay 
module.exports ={
    errorHandler,
    two,
}


// very very import jinish 

// npm init -y dici tai json file create hoye gece 
// ekhon ami type : module dici ..... so ekhane ami directly export korte parbo amar icca moto

// jemon
// export errorHandler;
// export new:
// export default two;