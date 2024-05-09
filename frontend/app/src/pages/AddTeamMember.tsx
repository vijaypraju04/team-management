import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  Header,
  SubText,
  HeaderContainer,
} from "../utils/styles";
import config from "../config";
import TeamMemberForm from "../components/TeamMemberForm";

const AddTeamMember = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "Regular",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`${config.API_BASE_URL}/team/members/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone_number: formData.phoneNumber,
        role: formData.role,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Failed to add team member:", error);
      });
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <Header>Add a Team Member</Header>
        <SubText>Set email, location, and role.</SubText>
      </HeaderContainer>
      <TeamMemberForm
        formData={formData}
        isEdit={false}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </PageContainer>
  );
};

export default AddTeamMember;
