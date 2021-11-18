import React, { useState,useEffect } from 'react';
import { Button,Form } from 'semantic-ui-react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';
export default function Update() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [lastUpdatedTime, setUpdateTime] = useState('');
    const [id, setID] = useState('');
    const navigate=useNavigate();
useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setPrice(localStorage.getItem('Price'));
        setUpdateTime(localStorage.getItem('LastUpdatedTime'))
}, []);

const updateAPIData = () => {
    axios.put(`http://localhost:8080/api/stocks/${id}`, {
        "currentPrice":price
	}).then(() => {
        navigate("/")
     }).catch((error)=>{
        alert("Unable to Update:"+error) 
     })
}

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Stock ID</label>
                    <input placeholder='Stock ID' value={id} readonly="readonly" onChange={(e) => setID(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Stock Name</label>
                    <input placeholder='Stock Name' value={name} readonly="readonly" onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Stock Price</label>
                    <input placeholder='Stock Price' value={price}  onChange={(e) => setPrice(e.target.value)}/>
                </Form.Field>

                <Form.Field>
                    <label>Stock Update Time</label>
                    <input placeholder='Stock Update Time' value={moment(lastUpdatedTime).format('lll')} readonly="readonly" onChange={(e) => setUpdateTime(e.target.value)}/>
                </Form.Field>
               
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}