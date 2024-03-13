const TodoModel = require('../models/TodoModel');
exports.getToDo = async (req, res) => {
    try {
        const todos = await TodoModel.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.saveToDo = async (req, res) => {
    try {
        const { text } = req.body;
        const todo = await TodoModel.create({ text });
        console.log("Added", todo);
        res.status(201).json(todo);
    } catch (err) {        res.status(400).json({ error: err.message });
    }
};
module.exports.updateToDo = async (req, res) => {
    const {_id,text}=req.body;
    TodoModel.findByIdAndUpdate(_id,{text})
    .then(()=>res.json("Todo updated")) 
    .catch(err=>res.status(400).json("Error: "+err));
}
module.exports.deleteToDo = async (req, res) => {
    const {_id,text}=req.body;
    TodoModel.findByIdAndDelete(_id,{text})
    .then(()=>res.json("Todo deleted")) 
    .catch(err=>res.status(400).json("Error: "+err));
}


