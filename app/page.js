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
