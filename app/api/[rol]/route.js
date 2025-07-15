import todo from "../../../todos.json"

export async function GET (_,{params}){
    console.log(params)
const a = await params




return Response.json(todo[0])

}