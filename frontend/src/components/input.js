
import React, { useEffect, useState } from 'react';

import axios from 'axios';

const ExampleComponent = () => {

    const [query, setQuery] = useState([]);

    const [dataFetching, setDataFetching] = useState(true);

    useEffect(() => {

        axios.get('http://localhost:9000/aliens/sec')

            .then(function (response) {

                if (response.status === 200) {

                    console.log('APIResponse', JSON.stringify(response.data, null, 1));

                    setQuery(response.data);

                    setDataFetching(false);

                } else {

                    alert('An error occurred');

                }

            })

            .catch(function (error) {

                console.log('Error', error);

            });

    }, []);

    return (
        <div className='div1'>


            {dataFetching ? (

                <p>Loading...</p>

            ) : (

                <pre>{JSON.stringify(query, null, 2)}</pre>


            )}

        </div>
    );

};

export default ExampleComponent;


