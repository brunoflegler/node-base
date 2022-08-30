// https://www.geeksforgeeks.org/how-to-throw-an-error-in-an-async-generator-function-in-javascript/

async function* generator() {
  yield Promise.reject(new Error('something bad happened'))
}

const iterator = generator()

iterator
  .next()
  .then(result => console.log(result.value))
  .catch(error => console.log(error))
