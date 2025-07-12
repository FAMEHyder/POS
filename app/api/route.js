import { writeFile } from "fs/promises";
await writeFile ("hello.txt", "hello server ");

console.log (process.cwd());

console.log ("this is a test msg");


import { readFile } from "fs/promises";

const read = await readFile("hello.txt", "utf-8")

console.log(read)
