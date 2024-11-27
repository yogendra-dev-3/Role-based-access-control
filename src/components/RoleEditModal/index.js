import { Button, Modal } from "react-bootstrap";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Checkbox } from "../common/CheckboxField"; // Make sure to create this component
import "./roleeditmodal.css";

const defaultData = {
  read: false,
  write: false,
  delete: false,
};

const EditAccessModal = ({
  show,
  handleClose = () => {},
  handleSave = () => {},
  permissions = null,
  roleName = "",
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultData,
    mode: "all",
  });

  useEffect(() => {
    if (permissions) {
      reset(permissions);
    } else {
      reset(defaultData);
    }
  }, [permissions, reset]);

  const onSubmit = (data) => {
    handleSave(data);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="role-modal-header">
        <Modal.Title>
          <span className="role-modal-title">Edit Access</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="role-modal-form">
        <div className="role-container">
          <div className="role-label">Role</div>
          <div className="role-name">{roleName}</div>
        </div>
        <div className="permissions-label">Permissions</div>
        <form
          className="d-flex flex-column gap-3"
          id="editAccessForm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="read"
            control={control}
            render={({ field }) => (
              <Checkbox
                label="Read Access"
                checked={field.value}
                onChange={field.onChange}
                error={errors.read?.message}
              />
            )}
          />
          <Controller
            name="write"
            control={control}
            render={({ field }) => (
              <Checkbox
                label="Write Access"
                checked={field.value}
                onChange={field.onChange}
                error={errors.write?.message}
              />
            )}
          />
          <Controller
            name="delete"
            control={control}
            render={({ field }) => (
              <Checkbox
                label="Delete Access"
                checked={field.value}
                onChange={field.onChange}
                error={errors.delete?.message}
              />
            )}
          />
        </form>
      </Modal.Body>
      <Modal.Footer className="role-modal-footer">
        <Button
          variant="secondary"
          onClick={handleClose}
          className="role-modal-button"
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          form="editAccessForm"
          type="submit"
          className="role-modal-button"
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditAccessModal;
