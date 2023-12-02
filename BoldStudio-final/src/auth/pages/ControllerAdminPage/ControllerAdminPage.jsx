import React from "react";
import { FormAdmin } from "../../components";
import {NavBar} from "../../../user/components/index"
import './controllerAdmin.css'

export function ControllerAdminPage() {
  const handleFormSubmit = (formData) => {
    console.log("Form data submitted:", formData);
  };

  return (
    <>
    <NavBar />
    <div className="controllerBody">
      <h1>Admin Control Panel</h1>
      <FormAdmin onFormSubmit={handleFormSubmit} />
    </div>
    </>
  );
}
