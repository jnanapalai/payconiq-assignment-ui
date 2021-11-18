import React, { useEffect,useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/api/stocks`)
            .then((response) => {
                setAPIData(response.data);
            }).catch((error) => {
                alert("Unable to Get Data :"+error);
            });
    }, [])

    const setData = (data) => {
        let { id, name, currentPrice, lastUpdate } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Price', currentPrice);
        localStorage.setItem('LastUpdatedTime', lastUpdate)
       
}

const getData = () => {
    axios.get(`http://localhost:8080/api/stocks`)
        .then((getData) => {
             setAPIData(getData.data);
         }).catch((error) => {
            alert("Unable to Get Data :"+error);
        });
}

const onDelete = (id) => {
    
    axios.delete(`http://localhost:8080/api/stocks/`+id)
    .then(() => {
        getData();
    }).catch((error) => {
        alert("Unable to Delete :"+error);
    });
  }
    return (
        <div>
            <Link to='/create'>
           <Table.Cell> 
           <Button >Create</Button>
                        </Table.Cell>
           </Link>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Stock Id</Table.HeaderCell>
                        <Table.HeaderCell>Stock Name</Table.HeaderCell>
                        <Table.HeaderCell>Stock Price</Table.HeaderCell>
                        <Table.HeaderCell>Stock Updated Time</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
  {APIData.map((data) => {
      
     return (
       <Table.Row>
           <Table.Cell>{data.id}</Table.Cell>
          <Table.Cell>{data.name}</Table.Cell>
           <Table.Cell>{data.currentPrice}</Table.Cell>
           <Table.Cell>{moment(data.lastUpdate).format('lll')}</Table.Cell>
           <Link to='/update'>
           <Table.Cell> 
           <Button onClick={() => setData(data)}>update</Button>
                        </Table.Cell>
           </Link>
           <Table.Cell>
           <Button onClick={() => onDelete(data.id)}>Delete</Button>
           </Table.Cell>
        </Table.Row>
   )})}
</Table.Body>
                
            </Table>
        </div>
    )
}