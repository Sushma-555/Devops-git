async function harry(){
let weatherofdelhi= new promise ((resolve, reject)=>{
       setTimeout(()=>{
          resolve("27 deg")
       })
})

let weatherofbanglore= new promise ((resolve, reject)=>{
    setTimeout(()=>{
       resolve("15 deg")
    },2000)
})
weatherofdelhi.then(alert)
}
harry()




