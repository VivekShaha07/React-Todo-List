import React from "react";

import {RiDeleteBin6Fill} from "react-icons/ri";

const ToDo = ({todos, removeTodo}) =>{

    return todos.map((todo, index) => (
        <div
        className="flex place-content-center text-md"
        >
            <div className="w-60 border-4 border-button-color text-button-color font-bold bg-border-color rounded-lg px-4 py-1 my-2">
                {todo.text}
            </div>

            <div className="ml-2">
                <RiDeleteBin6Fill 
                onClick={() => removeTodo(todo.id)}
                className="text-3xl mx-8 my-3 text-border-color"
                />
            </div>

        </div>
    ))
};

export default ToDo;