let job = false;
let p = new Promise((resolve, reject) => {
    if (job) {
        resolve('Job done');
    } else {
        reject('Job not done');
    }
  
})
    .then((res) => console.log(res))
    .catch((err)=> console.log(err))
    .finally(()=> console.log("This is your Result"));