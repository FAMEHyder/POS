import { notFound } from "next/navigation"

export async function generatemetadata ({params})  {
  const {BlogID} = await params

  return {
    title : `Blog ${BlogID}`,
  }
} 
async function Blog1({params}) {
    console.log(await params)

    const {BlogID} = await params


    if (BlogID == 'test'){
      notFound()
    }
  return (
    <div>
        <h1>Blog one {BlogID}</h1>
    </div>
  )
}

export default Blog1
