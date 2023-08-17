import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const UpdateCoffee = () => {

  const coffee =useLoaderData()
  const {_id, name, quantity, supplier, taste, category, details, photo }=coffee

  const handleUpdateCoffee=event=>{
    event.preventDefault();
    const form=event.target;

    const name=form.name.value;
    const quantity=form.quantity.value;
    const supplier=form.supplier.value;
    const taste=form.taste.value;
    const category=form.category.value;
    const details=form. details.value;
    const photo=form.photo.value;

    const updateCoffee={ name, quantity, supplier, taste, category, details, photo }
    console.log(updateCoffee);
  
    fetch(`http://localhost:5000/coffee/${_id}`,
    {
      method: "PUT",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(updateCoffee), 
    })
    .then(res=>res.json())
    .then(data=>{
   
      if(data.modifiedCount>0){
        Swal.fire({
          title: 'Success!',
          text: 'Coffee updated  successfully',
          icon: 'success',
          confirmButtonText: 'Done!'
        })
      }
    })
};


  return (
    <div className="bg-[#f1f0ed] p-24">

        <h2 className="text-3xl font-extrabold text-center "> Update coffee:{name}</h2>

<form onSubmit={handleUpdateCoffee} >

    {/* form name and queantity row */}
<div className="md:flex mb-8">

    <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text"> Name</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="name" placeholder=" coffee name" defaultValue={name} className="input input-bordered w-full" />
  </label>
</div>


<div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Quantity</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="quantity" placeholder="quantity" defaultValue={quantity} className="input input-bordered w-full" />
  </label>
</div>


</div>

{/* supplier and taste  */}
<div className="md:flex  mb-8">

    <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Supplier</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="supplier" placeholder=" Supplier" defaultValue={supplier} className="input input-bordered w-full" />
  </label>
</div>


<div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Taste</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="taste" placeholder="test" defaultValue={taste} className="input input-bordered w-full" />
  </label>
</div>


</div>
{/* category and photo  */}
<div className="md:flex  mb-8">

    <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text"> category</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="category" placeholder="category" defaultValue={category} className="input input-bordered w-full" />
  </label>
</div>


<div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Details</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="details" placeholder="details" defaultValue={details} className="input input-bordered w-full" />
  </label>
</div>


</div>

    {/* photo url */}
    <div className=" mb-8">

    <div className="form-control w-full">
  <label className="label">
    <span className="label-text"> photo Url</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="photo" placeholder="photo url" defaultValue={photo} className="input input-bordered w-full" />
  </label>
</div>


</div>
<input type="submit" className="btn btn-block" value="Update coffee" />


</form>
</div>
  )
}

export default UpdateCoffee
