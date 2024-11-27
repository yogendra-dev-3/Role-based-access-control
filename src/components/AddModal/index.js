import { Button, Modal } from "react-bootstrap";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { InputField } from "../common/InputField";
import ToggleSwitch from "../common/ToggleSwitch";
import "./addmodal.css"; // Custom CSS for additional styling

const AddUserModal = ({ show, handleClose, handleSave }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      status: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    handleSave(data);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
    >
      <Modal.Header closeButton className="custom-modal-header">
        <Modal.Title ><span className="custom-modal-title">Add User</span></Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-modal-form">
        <form
          className="d-flex flex-column gap-4"
          id="addOrEditUser"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Name"
                placeholder="Enter your name"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={errors.name?.message}
              />
            )}
            rules={{
              required: "Please enter your name",
            }}
          />
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Email"
                placeholder="Enter your email"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={errors.email?.message}
              />
            )}
            rules={{
              required: "Please enter your email",
            }}
          />
          <Controller
            name="status"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <ToggleSwitch
                label="Status"
                isActive={value}
                onChange={onChange}
              />
            )}
          />
        </form>
      </Modal.Body>
      <Modal.Footer className="custom-modal-footer">
        <Button
          variant="secondary"
          onClick={handleClose}
          className="custom-modal-button"
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          form="addOrEditUser"
          type="submit"
          className="custom-modal-button"
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddUserModal;
