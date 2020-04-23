// Ref: https://nodejs.org/api/process.html#process_event_uncaughtexception
process.on('uncaughtException', (error) => {
  console.log('error message: ', error.message)
  console.log('error stack:\n', error.stack)
})

function foo() {
  const n = 1
  n.split('')
}
foo()