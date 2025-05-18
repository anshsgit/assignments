import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { v4 as uuidv4 } from 'uuid';
import styles from './RandomUser.module.css';

const RandomUser = () => {
  const [mapData, setMapData] = useState([]); 
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://randomuser.me/api/?results=10&page=${page}` 
    })
    .then(user);
    console.log('page no: ', page);
  }, [page]);

  function user(response) {
    const data = response.data.results;
    data.map((user) => {
      const newUser = {
        id: uuidv4(),
        image: <img style={{borderRadius: '50%'}} src={user.picture.medium} alt='user image' />,
        name: `${user.name.first} ${user.name.last}` 
      };
      console.log('user: ', newUser);
      setMapData(users => [...users, newUser])
    })
    
  }


  return (<div style={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '25px'
    }}>
    <header>
      <h2>Random Users</h2>
    </header>

    <main style={{
      display: 'grid', gridTemplateColumns: 'repeat(6, auto)', gap: '20px', justifyContent: 'center', width: '90%', margin: '0 auto'
      }}>
        {mapData.map((user, index) => {
          console.log(user, index);
          return <div key={index} style={{
            border: '1px solid #DDDDDD', borderRadius: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10px'
            }}>
            <div>{user.image}</div>
            <div style={{
              fontSize: '20px', fontWeight: 'bold'
              }}>{user.name}</div>
          </div>
        })}
    </main> <br />

    <button onClick={() => { setPage(page => page+1) }} style={{padding: '5px 10px 5px 10px'}}>Load More Users</button>
    </div>
  )
}

export default RandomUser