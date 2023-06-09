import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-three-olive.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-4">
      <div className="text-center">
        <h3 className="text-orange-500 font-bold text-3xl">Service</h3>
        <h2 className="font-bold text-5xl">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected humour, or randomised <br /> words
          which do not look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
