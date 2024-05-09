import styled from "styled-components";

type CardProps = {
  name: string;
  number: string;
  email: string;
  isAdmin: boolean;
};

const Card = ({ name, number, email, isAdmin }: CardProps) => {
  return (
    <CardContainer>
      <b>
        {name} {isAdmin && `(admin)`}
      </b>
      <em>{number}</em>
      <em>{email}</em>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  display: flex;
  color: black;
  border-bottom: 1px solid black;
  flex-direction: column;
  gap: 8px;
  padding: 12px 0px;
  align-items: flex-start;
`;
