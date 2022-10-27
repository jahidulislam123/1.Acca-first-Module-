// ekahneo promise handle kora shikbo kinta eta asyncAwait diye 

const promise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success")

    },1000)

})
// await mane hocce jotokkhon porjonto kaj ses na hocce totokkhon porjonto await korbe 
// await obossoi ekta asyncronas function er vitore rakhte hoy


// async fucntion like kono nam dile async function hoye jabe
async function getData(){
   // async function e .then and .catch deoa lage na just variable baniye korlei hoy
//  const res =[];
   const res =await promise;
   console.log(res)
}
//fucntion take call korlam
getData()
//  amra evabe data fetch korta age 
fetch("")
.then((res)=>res.json())
.then((data)=>console.log(data))
.catch(err=>console.log(err))
// etake async await fucntion e convert korbo 
//this is just example
async function getUser(){
    
  const res =   await fetch("")
  const data =await res.json(); 
  const res2=await fetch(`http://www.example.com/${user.id}`);
  const products =res2.json();
  console.log(products);

}