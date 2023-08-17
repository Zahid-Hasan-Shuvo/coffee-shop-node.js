import Swal from 'sweetalert2'
const AddCoffee = () => {

const handleAddCoffee=event=>{
    event.preventDefault();
    const form=event.target;

    const name=form.name.value;
    const quantity=form.quantity.value;
    const supplier=form.supplier.value;
    const taste=form.taste.value;
    const category=form.category.value;
    const details=form. details.value;
    const photo=form.photo.value;

    const newCoffee={ name, quantity, supplier, taste, category, details, photo }
    console.log(newCoffee);
  
    fetch('http://localhost:5000/coffee',
    {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(newCoffee), 
    })
    .then(res=>res.json())
    .then(data=>{
   
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Coffee added successfully',
          icon: 'success',
          confirmButtonText: 'Done!'
        })
      }
    })
};


  return (
    <div className="bg-[#f1f0ed] p-24">

        <h2 className="text-3xl font-extrabold text-center ">Add a coffee</h2>

<form onSubmit={handleAddCoffee} >

    {/* form name and queantity row */}
<div className="md:flex mb-8">

    <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text"> Name</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="name" placeholder=" coffee name" className="input input-bordered w-full" />
  </label>
</div>


<div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Quantity</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="quantity" placeholder="quantity" className="input input-bordered w-full" />
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
   
    <input type="text" name="supplier" placeholder=" Supplier" className="input input-bordered w-full" />
  </label>
</div>


<div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Taste</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="taste" placeholder="Supplier" className="input input-bordered w-full" />
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
   
    <input type="text" name="category" placeholder="category" className="input input-bordered w-full" />
  </label>
</div>


<div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Details</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="details" placeholder="details" className="input input-bordered w-full" />
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
   
    <input type="text" name="photo" placeholder="photo url" className="input input-bordered w-full" />
  </label>
</div>


</div>
<input type="submit" className="btn btn-block" value="Add coffee" />


</form>
</div>
  )
}

export default AddCoffee