import { useState, useEffect } from "react";
import styled from "styled-components";
import config from "../config";
import { selectTeamMembersForCard } from "../utils/selectors";
import { DisplayTeamMember } from "../utils/types";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import {
  PageContainer,
  Header,
  HeaderContainer,
  SubText,
  Row,
} from "../utils/styles";
import { phoneNumberAutoFormat } from "../utils/helpers";

function TeamList() {
  const [teamMembers, setTeamMembers] = useState<DisplayTeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/team/members/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const teamMembersForCards = selectTeamMembersForCard(data);
        setTeamMembers(teamMembersForCards);
      })
      .catch((error) => console.error("Failed to fetch data:", error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <PageContainer>
      <HeaderContainer>
        <Row>
          <Header>Team Members</Header>
          <StyledLink to="/add">
            <AddButton>+</AddButton>
          </StyledLink>
        </Row>
        {isLoading ? (
          <SubText>Loading team members...</SubText>
        ) : (
          <SubText>
            {teamMembers.length > 0
              ? `You have ${teamMembers.length} team members`
              : "Please add a team member"}
          </SubText>
        )}
      </HeaderContainer>
      {teamMembers.map(({ fullName, phoneNumber, email, isAdmin, id }) => (
        <StyledLink to={`/edit/${id}`} key={id}>
          <Card
            name={fullName}
            number={phoneNumberAutoFormat(phoneNumber)}
            isAdmin={isAdmin}
            email={email}
          />
        </StyledLink>
      ))}
    </PageContainer>
  );
}

export default TeamList;

const AddButton = styled.button`
  padding: 8px;
  width: 30px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
