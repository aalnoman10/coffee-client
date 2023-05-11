import React, { useState, useEffect } from 'react';

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/coffee')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleView = (id) => {
        console.log(id);
    }
    const handleUpdate = (id) => {
        console.log(id);
    }
    const handleDelete = (id) => {
        const con = confirm('are you sure')
        if (con) {
            console.log(id);

            fetch(`http://localhost:5000/coffee/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(del => {
                    // const del = data
                    setData(data)
                    if (del.deletedCount > 0) {
                        alert('su')
                    }
                })
        }
    }

    return (
        <div className='container'>
            <div className='text-center py-8'>
                <p className='text-slate-400'>---- fsk & Ki ---</p>
                <h3 className="text-3xl text-red-950 font-mono">Our Popular Product</h3>
                <p ><button className='bg-red-400 '>Add a C</button></p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:px-44">
                {
                    data.map(d => <div key={d._id}>
                        <div className="flex justify-between items-center bg-slate-300 p-4">
                            <div className='w-1/3'>
                                <img src={d?.photo} alt="" />
                            </div>
                            <div>
                                <p><b className='font-medium'>Name : </b>{d.name}</p>
                                <p><b className='font-medium'>Chef : </b>{d.chef}</p>
                                <p><b className='font-medium'>Price : </b>{d.price}</p>
                            </div>
                            <div>
                                <p><button onClick={() => handleView(d._id)} className='bg-orange-300 p-2 w-8'>W</button></p>
                                <p><button onClick={() => handleUpdate(d._id)} className='bg-slate-800 italic p-2 w-8'>l</button></p>
                                <p><button onClick={() => handleDelete(d._id)} className='bg-red-400 p-2 w-8'>X</button></p>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default Home;