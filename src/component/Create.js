import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Create() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    
    const postData = () => {
        
        axios.post(`http://localhost:8080/api/stocks`, {
            "name":name,
            "currentPrice":price
  
        }).then((response) => {
           navigate("/")
        }).catch((error)=>{
            alert("Unable to create"+error);
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Stock Name</label>
                    <input placeholder='Stock Name' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Stock Price</label>
                    <input placeholder='Stock Price' onChange={(e) => setPrice(e.target.value)}/>
                </Form.Field>
               
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}