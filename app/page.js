import Link from "next/link";

export default function Home() {
  return (
    <>
    
    <h1>Hello</h1>
    <Link href={"/About"}>About</Link> {"  "}
    <Link href={"/Services/Web_dev"}>web dev</Link>{"  "}
    <Link href={"/Blogs/BlogID"}>Blogs</Link>
    </>
  );
}


import { readFile } from "fs/promises";

const read = await readFile("hello.txt", "utf-8")

console.log("Reading the file from home",read)

import http from "http";

const server = http.createServer((req,res)=>{

  console.log(req.url)
  res.end("http server has been created successfully")

})

server.listen(5000,()=>{

  console.log("Server is listening")

})

