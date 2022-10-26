// promise er 3 ta state thakete pare 
// 1: pending mane ekta promise se amay promise korece se amay data ene dibe \
// 2: resolved  mane data ta jodi successfully se ane dite pare tokhon take ami resolved state bolbo

// 3:  rejected amne hocce jodi kono error er karone jodi data ta na ene dite pare


// promise use kora hoy ekta call back fuction er vitore jodi arekta call back function use kori ete code stability kome jay egula dhur korar jonno 
// promise use kora hoy 

//promise hocce jekono ekta asyncronous kaj korbe 

// const myPromise = new Promise();
const myPromise = new Promise((resolve, reject)=>{
    //promise korar por kaj ta ki resolve holo naki reject holo tar jonno abar 2 ta peramiter nite hobe 

    // const user =null;
    const user ={id:1}
    // dhori database theke user ta aslo 
    if(!user){
        reject("Something went wrong")

    }else{
        setTimeout(()=>{
            // resolve("Successfully got the data");
            resolve({name:"jhon"});
        },1000)

    }
   
});

// ekhon ei promise take comsume korbo 
// mane ami je promise korci asole kono ki data pelam ar data ple kon dhoroner data pelam r error hole kon dhoroner error holo seta asole dekhbo
//etai consume kora

// multiple promise 

const userIds =[1,2,3,4,5,6];
let userData =[];

for (let i=0;i<userIds.length;i++){
    const userId =userIds[i];
    userData.push(myPromise);
}

console.log(userData)
Promise.all(userData).then(res=>{
    console.log(res)
})

myPromise
.then(res=>console.log("found in then",res))
.catch(err=>console.log("found in catch",err))
// datata resolve hole than e pabo ar jodi reject hoy ami catch e pbo 



// promise ta kintw asyncronus function

