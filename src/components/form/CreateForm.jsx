import React, { useEffect, useState } from "react";
import styles from "./CreateForm.module.css";
const initialState = {
  id: 0,
  name: "",
  description: "",
  price: 0,
};
function CreateForm({ hide, setHideState }) {
  const [serviceState, setServiceState] = useState(initialState);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => {
        response.json().then((result) => {
          let len = result.length + 1;
          setServiceState({ id: len });
        });
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  console.log(serviceState, " ", JSON.stringify(serviceState));

  function createService(e) {
    fetch(`http://localhost:5000/services`, {
      method: "POST",
      body: JSON.stringify(serviceState),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("I am created", res);
      })
      .catch((e) => console.error(e));
    console.log("first");
  }
  return (
    <div>
      <div
        style={{ display: hide ? "none" : "block" }}
        className={styles.overlay}
      ></div>
      <div className={styles.createForm} hidden={hide}>
        <button
          style={{
            height: "20px",
            width: "20px",
            justifySelf: "right",
            margin: "5px",
            padding: "5px",
          }}
          onClick={() => setHideState(!hide)}
        >
          X
        </button>
        <form className={styles.innerForm} onSubmit={createService}>
          <label name="Name">Name</label>
          <input
            type="text"
            id="name"
            value={serviceState.name}
            placeholder="Name"
            required
            onChange={(input) =>
              setServiceState({ ...serviceState, name: input.target.value })
            }
          />
          <label name="Description">Description</label>
          <input
            type="text"
            id="Description"
            value={serviceState.description}
            placeholder="Description"
            required
            onChange={(input) =>
              setServiceState({
                ...serviceState,
                description: input.target.value,
              })
            }
          />
          <label name="Price">Price</label>
          <input
            type="text"
            id="Price"
            value={serviceState.price}
            placeholder="Price"
            required
            onChange={(input) =>
              setServiceState({ ...serviceState, price: input.target.value })
            }
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateForm;
