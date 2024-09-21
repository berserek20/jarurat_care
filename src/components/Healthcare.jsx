import React, { useEffect, useState } from "react";
import HealthcareCard from "./HealthcareCard";
import Create from "./form/Create";

function Healthcare() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => {
        response.json().then((result) => {
          setServices(result);
        });
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Healthcare Services</h1>
      <Create />
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {services?.map((service) => (
          <HealthcareCard
            key={service.id}
            name={service.name}
            desc={service.description}
            uid={service.id}
            price={service.price}
          />
        ))}
      </ul>
    </div>
  );
}

export default Healthcare;
