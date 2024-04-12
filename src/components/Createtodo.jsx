/* eslint-disable no-unused-vars */
import { useState } from 'react';

export function Createtodo() {
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');

    return (
        <div>
            {/* <h1>hii</h1> */}
            <input type="text" name="title" id="title" placeholder='title' onChange={(e) => {
                const value = e.target.value;
                setTitle(value)
                ;
            }} /><br />
            <input type="text" name="desc" id="desc" placeholder='desc' onChange={(e) => {
                const value = e.target.value;
                setDesc(value);
            }} /><br />
            <button onClick={() => {
                fetch("http://localhost:3000/todos", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                .then(async (res) => {
                    const JSON = await res.json();
                    alert("Todo Added");
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            }}>Add Todo</button><br />
        </div>
    );
}
