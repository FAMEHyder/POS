
async function Myfile({params}) {
const {myparam} = await params
console.log(myparam)

  return (
    <div>
      <h1> Hello </h1>
    </div>
  )
}

export default Myfile