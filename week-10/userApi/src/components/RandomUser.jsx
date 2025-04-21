import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const RandomUser = () => {
  const [userData, setUserData] = useState({image: '', name: ''});
  const [mapData, setMapData] = useState([]); 
  const count = useRef(0);

  function loadUser() {
    axios({
      method: 'get',
      url: 'https://randomuser.me/api/'
    })
    .then(user);
  }

  function user(response) {
    const data = response.data.results[0];
    const newUser = {
      image: <img style={{borderRadius: '50%'}} src={data.picture.medium} alt='user image' />,
      name: (data.name.first + data.name.last) 
    };

    setUserData(user => newUser);
    
    setMapData(mapData => [...mapData, newUser]);
  }

  return (<div style={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '25px'
    }}>
    <header>
      <h2>Random Users</h2>
    </header>

    <main style={{
      display: 'grid', gridTemplateColumns: 'repeat(6, auto)', gap: '20px', width: '90%'
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

    <button onClick={loadUser} style={{padding: '5px 10px 5px 10px'}}>Load More Users</button>
    </div>
  )
}

export default RandomUser