import { Button, Modal } from "react-bootstrap";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { InputField } from "../common/InputField";
import ToggleSwitch from "../common/ToggleSwitch";
import "./addmodal.css";
import { SelectField } from "../common/Select";
import { Checkbox } from "../common/CheckboxField";

const defaultData = {
  name: "",
  email: "",
  status: false,
  roleId: 3, // default role is User
};

const roleOptions = [
  { label: "Admin", value: 1 },
  { label: "Manager", value: 2 },
  { label: "User", value: 3 },
];

const AddUserModal = ({ show, handleClose, handleSave, user }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: defaultData,
    mode: "all",
  });

  useEffect(() => {
    if (user) {
      reset(user);
    } else {
      reset(defaultData);
    }
  }, [user, reset]);

  const onSubmit = (data) => {
    handleSave(data);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="custom-modal-header">
        <Modal.Title>
          <span className="custom-modal-title">Add User</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-modal-form">
        <form
          className="d-flex flex-column gap-2"
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
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
              maxLength: {
                value: 50,
                message: "Name cannot exceed 50 characters",
              },
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
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Please enter a valid email address",
              },
            }}
          />
          <Controller
            name="roleId"
            control={control}
            render={({ field }) => (
              <SelectField
                label="Role"
                value={field.value}
                onChange={field.onChange}
                options={roleOptions}
                error={errors.roleId?.message}
              />
            )}
            rules={{ required: "Please select a role" }}
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
