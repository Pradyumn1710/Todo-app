// This is going  to be the backend for the TODo
const express = require('express')
const {createTodo} = require("./types")
const {todo} = require('./todo')
const cors = require('cors')
const app = express()
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>
{
    console.log("Testing")
})
app.post('/todos',async (req,res)=>
{
    const createpayload = req.body;
    const parsedpayload = createTodo.safeParse(createpayload)
    if(!parsedpayload.success)
    {
        return res.status(411).send("You send a wrong input")
    }
    // Submit it to the mongodb
    await todo.create({
        title: createpayload.title,
        description: createpayload.description,
        completed:false
    })
    res.json({
        msg:"Todo is created",
    })
})
app.get('/todos', async function(req, res) { 
        let todos = await todo.find(); // Use the Todo model to query the database
        res.json({ todos });
});
app.put ('completed', async function(req, res){
    const createpayload = req.body;
    const parsedpayload = createTodo.safeParse(createpayload)
    if(!parsedpayload.success)
    {
        return res.status(411).send("You send a wrong input")
    }
await todo.update({
id: req.body.id,
}, 
{
completed: true
}
);
return res.json('Task has been completed')
});
app.listen(3000,()=>{
    console.log("hello")
})