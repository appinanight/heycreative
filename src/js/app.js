const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve('done!');
  }, 1000)
})

promise.then(res => {
  console.log(res)
})


