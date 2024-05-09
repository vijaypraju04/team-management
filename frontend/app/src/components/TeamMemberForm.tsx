import React from "react";
import styled from "styled-components";
import { Row } from "../utils/styles";

type TeamMemberFormProps = {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleDelete?: () => void;
  isEdit: boolean;
};

const TeamMemberForm = ({
  formData,
  handleChange,
  handleSubmit,
  handleDelete,
  isEdit,
}: TeamMemberFormProps) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Label>Info</Label>
      <Input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <Input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <Input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />
      <Label>Role</Label>
      <RadioContainer>
        <RadioLabel htmlFor="regular">
          Regular - Can't delete members
        </RadioLabel>
        <Input
          type="radio"
          id="regular"
          name="role"
          value={"Regular"}
          checked={formData.role === "Regular"}
          onChange={handleChange}
        />
      </RadioContainer>
      <RadioContainer>
        <RadioLabel htmlFor="admin">Admin - Can delete members</RadioLabel>
        <Input
          type="radio"
          id="admin"
          name="role"
          value={"Admin"}
          checked={formData.role === "Admin"}
          onChange={handleChange}
        />
      </RadioContainer>
      {isEdit ? (
        <Row>
          <DeleteButton type="button" onClick={handleDelete}>
            Delete
          </DeleteButton>
          <SaveButton type="submit">Save</SaveButton>
        </Row>
      ) : (
        <SaveButton type="submit">Save</SaveButton>
      )}
    </Form>
  );
};
export default TeamMemberForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  text-align: left;
  margin: 8px 0px;
  font-size: 14px;
`;

const RadioLabel = styled.label`
  font-weight: 600;
  font-size: 12px;
`;

const Input = styled.input`
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DeleteButton = styled.button`
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;
  color: white;
  background-color: red;
`;

const SaveButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  align-self: flex-end;

  &:hover {
    background-color: #0056b3;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  border-bottom: solid 1px grey;
`;
