import React, { useContext, useEffect, useState } from "react";
import styles from "./UpdateForm.module.css";
import { UpdateFormContext } from "../../context/UpdateFormContext";
function UpdateForm() {
  const { id, hideState, setHideState } = useContext(UpdateFormContext);
  const [serviceState, setServiceState] = useState({});
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((response) => {
        response.json().then((result) => {
          setServiceState(result);
        });
      })
      .catch((error) => {
        console.error("Error fetching service:", error);
      });
  }, [id]);
  function updateService(e) {
    fetch(`http://localhost:5000/services/${id}`, {
      method: "PATCH",
      body: JSON.stringify(serviceState),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("I am updated", res);
      })
      .catch((e) => console.error(e));
    console.log("first");
  }
  return (
    <>
      <div
        style={{ display: hideState ? "none" : "block" }}
        className={styles.overlay}
      ></div>
      <div
        className={styles.updateForm}
        style={{ display: hideState ? "none" : "block" }}
        //   hidden={hideState}
      >
        <button
          style={{
            height: "20px",
            width: "20px",
            justifySelf: "right",
            margin: "5px",
            padding: "5px",
          }}
          onClick={() => setHideState(true)}
        >
          X
        </button>

        <form className={styles.innerForm} onSubmit={(e) => updateService()}>
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
    </>
  );
}

export default UpdateForm;
