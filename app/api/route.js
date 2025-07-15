// import { writeFile } from "fs/promises";
// await writeFile ("hello.txt", "hello server ");

// console.log (process.cwd());

// console.log ("this is a test msg");


// import { readFile } from "fs/promises";

// const read = await readFile("hello.txt", "utf-8")

// console.log(read)


// export function GET (){
//     console.log("firt get req")
//     return new Response("Hello response")
// }






// const data = [
//     {'name ' : 'Zeeshan'},
//     {'age' : '24'},
//     {'proffision' : 'student'}
// ]
import data from '../../todos.json'

export function GET (){

return new Response (JSON.stringify({data},{
    header : {
        'Contant-Type': 'application/json'
    } 
})
)

}

