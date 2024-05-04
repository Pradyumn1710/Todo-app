const mongoose = require ("mongoose");
// mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net
// . env
// mongoose. connect ("mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/")
mongoose. connect ("mongodb+srv://admin:Abhishek%401234@cluster0.softq.mongodb.net/todo")
const todoSchema = mongoose. Schema ({
title: String,
description: String,
completed: Boolean
})
const todo = mongoose.model( 'todos', todoSchema)
module.exports ={
    todo
}
