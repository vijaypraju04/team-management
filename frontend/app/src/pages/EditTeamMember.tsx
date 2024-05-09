import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  PageContainer,
  Header,
  SubText,
  HeaderContainer,
} from "../utils/styles";
import config from "../config";
import TeamMemberForm from "../components/TeamMemberForm";

const EditTeamMember = () => {
  const [memberData, setMemberData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "Regular",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/team/members/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setMemberData({
          firstName: data.first_name,
          lastName: data.last_name,
          email: data.email,
          phoneNumber: data.phone_number,
          role: data.role,
        });
      })
      .catch((error) => {
        console.error("Failed to fetch team member data:", error);
      });
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMemberData({ ...memberData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`${config.API_BASE_URL}/team/members/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: memberData.firstName,
        last_name: memberData.lastName,
        email: memberData.email,
        phone_number: memberData.phoneNumber,
        role: memberData.role,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Failed to update team member:", error);
      });
  };

  const handleDelete = () => {
    fetch(`${config.API_BASE_URL}/team/members/${id}/`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        navigate("/");
      })
      .catch((error) => {
        console.error("Failed to delete team member:", error);
        alert("Failed to delete team member.");
      });
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <Header>Edit Team Member</Header>
        <SubText>Edit contact info, location, and role.</SubText>
      </HeaderContainer>
      <TeamMemberForm
        formData={memberData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        isEdit={true}
      />
    </PageContainer>
  );
};

export default EditTeamMember;
