import { writeFile } from "fs/promises";

await writeFile ("hello.txt", "hello server ");

console.log (process.cwd());

console.log ("this is a test msg");

