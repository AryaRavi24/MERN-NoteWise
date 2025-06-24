import mongoose from "mongoose";

//Step1. Create a schema
//Step2- Create a Model based of that schema

const noteSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },
    },
    {timestamps:true}   //created at , Updated at
);

const Note = mongoose.model("Note", noteSchema);

export default Note;