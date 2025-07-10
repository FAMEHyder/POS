async function Blog1({params}) {
    console.log(await params)

    const {BlogID} = await params
  return (
    <div>
        <h1>Blog one {BlogID}</h1>
    </div>
  )
}

export default Blog1
