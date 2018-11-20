import React from 'react';
import ReactLoading from 'react-loading';

const list = [
    {
        prop: 'spin',
        name: 'Loading',
    },
];
const Loader = () => (
    <div>
        {list.map(item => (
            <span key={item.prop} style={{height: '100vh', display:'flex', justifyContent: 'center', alignItems:'center'}}>
                <div>
                    <ReactLoading type={item.prop} color="black" />
                    <h5>{item.name}</h5>
                </div>
            </span>
        ))}
    </div>
);

export default Loader;
