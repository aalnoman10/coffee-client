import React from 'react';

const AddCoffee = () => {

    const handleForm = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee = { name, chef, supplier, taste, category, details, photo }

        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully')
                }
            })
    }

    return (
        <div className='bg-[#F4F3F0] md:p-24'>
            <h2 className="text-3xl text-center">Add a Coffee</h2>
            <form className='' onSubmit={handleForm}>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label font-medium">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Coffee Name" name='name' className="input input-bordered w-full mr-5" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label font-medium">
                            <span className="label-text">Chef</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Chef Name" name='chef' className="input input-bordered w-full mr-5" />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label font-medium">
                            <span className="label-text">supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="supplier" name='supplier' className="input input-bordered w-full mr-5" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label font-medium">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Taste" name='taste' className="input input-bordered w-full mr-5" />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label font-medium">
                            <span className="label-text">category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="category" name='category' className="input input-bordered w-full mr-5" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label font-medium">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Details" name='details' className="input input-bordered w-full mr-5" />
                        </label>
                    </div>
                </div>
                <div className='pb-3 '>
                    <div className="form-control">
                        <label className="label font-medium">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="photoUrl" name='photo' className="input input-bordered w-full mr-5" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-wide w-full" />
            </form>
        </div>
    );
};

export default AddCoffee;