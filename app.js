//Introduction
const amount = 12;

if(amount<12){
    console.log("low amount");
}else{
    console.log("big amt");
}

console.log(`first node program`)

//allready mande variables or keywords

/*GLOBALS - NO WINDOW !!!!
__dirname - path to current directory
__filename - filename 
require - function to use modules(commonJS)
module - info anout current module(file)
process - info about env where the program is being executed*/


console.log(__dirname);

//setInterval i.e after some time it will be exceuted it 


//Modules -- es6 modules 
const names = require('./module.js')
const sayHi = require('./utilsFuns.js')
const data = require('./items.js')
require('./mindGernade.js')

console.log(data)
console.log(names);
sayHi('susan');
sayHi(names.john);

//os module
const os = require('os');

/* info about current user */
const user = os.userInfo()
console.log(user)

/* method return the system uptime in seconds */
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),

    freeMen: os.freemem()
}

console.log(currentOS)

//path module 
const path = require('path')
console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

//fs module
/* sync */
const { readFileSync, writeFileSync } = require('fs') 
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt',
    `here is the result ${first}, ${second}`,
    {flag: 'a'}
)
console.log(first, second)

/*sync*/
const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
})

//http module 
const http = require('http');

const server1 = http.createServer((req, res) =>{
res.write('welcome to our home page')
res.end()
})
server1.listen(5000)

const server2 = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('here is our short history')
    }
    res.end(`
      <h1>oops!</h1>
      <p>we cant seem to find the page you are looking for<p>
      <a href="/">back home</a>
    `)
})
server2.listen(5001)

//npm package
const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)