import React, { useContext } from "react";
import { Button } from "antd";
import { UpdateFormContext } from "../../context/UpdateFormContext";

function Update({ uid }) {
  const { hideState, setHideState, setId } = useContext(UpdateFormContext);
  function updateService() {
    setId(uid);

    setHideState(!hideState);
  }

  return (
    <Button type="primary" onClick={updateService}>
      Update
    </Button>
  );
}

export default Update;
