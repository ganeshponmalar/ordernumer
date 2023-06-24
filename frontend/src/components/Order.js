import React, { useState } from 'react';

import axios from 'axios';

export default function FormatData() {

  const [orderNumber, setOrderNumber] = useState('');

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleFetchData = () => {

    setLoading(true);

    axios
      .get(`http://localhost:9000/aliens/${orderNumber}`)

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

      <label className='label' htmlFor='orderNumber'>

        Order Number:

      </label>

      <textarea

        type='text'

        value={orderNumber}

        onChange={e => setOrderNumber(e.target.value)}

        placeholder='Enter order number'

        className='text-a'

      />
      <br />

      <button className='btn' onClick={handleFetchData}>

        Order-Number
      </button>
      {loading && <p>Loading...</p>}

      {data && (

        <div className='details'> {/* Separate div for displaying details */}

          <pre className='json-format'>{JSON.stringify(data, null, 2)}</pre>

        </div>

      )}
    </div>
  );
}


