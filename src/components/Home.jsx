import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [coffees, setCoffees] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/coffee')
            .then(res => res.json())
            .then(data => setCoffees(data))
    }, [])

    // const handleView = (id) => {
    //     console.log(id);
    // }
    // const handleUpdate = (id) => {
    //     console.log(id);
    // }
    const handleDelete = (id) => {
        const con = confirm('are you sure')
        if (con) {
            console.log(id);

            fetch(`http://localhost:5000/coffee/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    // setData(data)
                    if (data.deletedCount > 0) {
                        alert('su')
                        const remaining = coffees.filter(coffee => coffee._id !== id)
                        setCoffees(remaining)
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
                    coffees.map(coffee => <div key={coffee._id}>
                        <div className="flex justify-between items-center bg-slate-300 p-4">
                            <div className='w-1/3'>
                                <img src={coffee?.photo} alt="" />
                            </div>
                            <div>
                                <p><b className='font-medium'>Name : </b>{coffee.name}</p>
                                <p><b className='font-medium'>Chef : </b>{coffee.chef}</p>
                                <p><b className='font-medium'>Price : </b>{coffee.price}</p>
                            </div>
                            <div>
                                <p><button className='bg-orange-300 p-2 w-8'>W</button></p>
                                <p><Link to={`/updateCoffee/${coffee._id}`}><button className='bg-slate-800 italic p-2 w-8'>l</button></Link></p>
                                <p><button onClick={() => handleDelete(coffee._id)} className='bg-red-400 p-2 w-8'>X</button></p>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default Home;