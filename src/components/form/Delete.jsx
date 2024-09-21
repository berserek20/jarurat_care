import { Button } from "antd";
import React from "react";

function Delete({ uid }) {
  function removeService() {
    fetch(`http://localhost:5000/services/${uid}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log("I am removed", res);
      })
      .catch((e) => console.error(e));
    console.log("removed:", uid);
  }
  return (
    <Button type="primary" onClick={removeService}>
      Delete
    </Button>
  );
}

export default Delete;
