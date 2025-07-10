async function Comments({params}) {
    console.log(await params)

    const {BlogID} = await params
  return (
    <div>
        <h1>All Comments one {BlogID} are :</h1>
    </div>
  )
}

export default Comments
