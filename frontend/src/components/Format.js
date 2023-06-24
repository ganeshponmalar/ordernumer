 import React, { useState } from 'react';

 import axios from 'axios';

 export default function FormatData() {

    const [orderNumber, setOrderNumber] = useState('');

    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleFetchData = () => {

        setLoading(true);

        axios.get(`http://localhost:9000/aliens/${orderNumber}`)

            .then(response => {
             
                if (response.status === 200) {

                    setData(response.data);

                } else {

                    alert('An error occurred');
                }
            })

            .catch(error => {

                console.log('Error', error);

            })

            .finally(() => {

                setLoading(false);

            });
    };

    return (

        <div className='container'>

            <label className='label' htmlFor='ON'>ON:</label>

            <textarea

                type="text"

                value={orderNumber}

                onChange={e => setOrderNumber(e.target.value)}

                placeholder="Enter-order-number"

                className='json'

            />

              <br/>
              
            <button  className='btn' onClick={handleFetchData}>click</button>

            {loading && <p>Loading...</p>}

            { data && (

                <pre className='json-format'>{JSON.stringify(data, null, 2)}</pre>

            )}

        </div>
    );
}


