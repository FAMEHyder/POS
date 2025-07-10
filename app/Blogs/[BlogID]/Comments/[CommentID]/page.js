
async function Comment({params}) {
    const paramobj = await params
    const {CommentID,BlogID} = paramobj
    console.log(CommentID)
    console.log(BlogID)

  return (
    <div>
        <h1> Comment number {CommentID} on {BlogID} is  </h1>
      
    </div>
  )
}

export default Comment