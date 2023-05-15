import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service;

  const { user } = useContext(AuthContext);
  const handleService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;

    const bookings = {
      customerName: name,
      date,
      email,
      img,
      service: title,
      serviceId: _id,
      price: price,
    };
    console.log(bookings);

    fetch("https://car-doctor-server-three-olive.vercel.app/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("data booked successfully");
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">Service Name :{title} </h2>
      <form onSubmit={handleService}>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                defaultValue={user?.displayName}
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date </span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" defaultValue={user?.email} name="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input type="text" defaultValue={"$" + price} name="price" className="input input-bordered" />
            </div>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary btn-block" type="submit" value="Check Now " />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
