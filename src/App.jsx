import { Container, Header } from "semantic-ui-react";
import './App.css';
import TabBarContainer from "./features/tabs/TabBar";
import tabs from "./assets/tabsData";

function App() {
  return (
    <div>
      <div className="App-header">
        <Header inverted as="h1">
          Project Mini-Mek
        </Header>
      </div>
      <Container>
        <TabBarContainer tabs={tabs} size="massive" />
      </Container>
    </div>
  );
}

export default App;
