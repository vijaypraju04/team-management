import styled from "styled-components";
import "./App.css";
import TeamList from "./pages/TeamList";
import AddTeamMember from "./pages/AddTeamMember";
import EditTeamMember from "./pages/EditTeamMember";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppLayout>
        <Header>Team management</Header>
        <main>
          <Routes>
            <Route path="/" element={<TeamList />} />
            <Route path="/add" element={<AddTeamMember />} />
            <Route path="/edit/:id" element={<EditTeamMember />} />
          </Routes>
        </main>
      </AppLayout>
    </Router>
  );
}

export default App;

const AppLayout = styled.div`
  display: flex;
  min-height: 100vh;
  text-align: center;
  flex-direction: column;
  align-items: center;
  background-color: #dcdcdc;
`;

const Header = styled.header`
  height: 200px;
  font-size: 48px;
  width: 100%;
  margin-top: 24px;
`;
