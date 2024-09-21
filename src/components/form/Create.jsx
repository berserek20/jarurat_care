import React, { useContext, useState } from "react";
import CreateForm from "./CreateForm";
import { Button } from "antd";

function Create() {
  const [createFormvisiblity, setCreateFormvisiblity] = useState(true);
  function createService() {
    console.log("create:");
    setCreateFormvisiblity(!createFormvisiblity);
  }
  return (
    <div>
      <Button type="primary" onClick={createService}>
        Create
      </Button>
      <CreateForm
        hide={createFormvisiblity}
        setHideState={setCreateFormvisiblity}
      />
    </div>
  );
}

export default Create;
