import React from "react";
import Delete from "./form/Delete";
import Update from "./form/Update";
import { Card } from "antd";

function HealthcareCard({ name, desc, uid, price }) {
  return (
    <li
      style={{
        listStyle: "none",
        margin: "5px",
        padding: "5px",
      }}
    >
      <Card
        size="small"
        title={name}
        // extra={<a href="#">More</a>}
        style={{
          height: "20em",
          width: 300,
        }}
      >
        <p>{desc}</p>
        <strong>Price- ${price}</strong>
      </Card>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Delete uid={uid} />
        <Update uid={uid} />
      </div>
    </li>
  );
}

export default HealthcareCard;
