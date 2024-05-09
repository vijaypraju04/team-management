import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  margin: 20px;
  width: 300px;
  max-height: 660px;
  overflow: scroll;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.h2`
  color: #333;
  align-self: flex-start;
`;

export const SubText = styled.p`
  color: #666;
  font-size: 14px;
  align-self: flex-start;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px black;
`;