import { Container, Header } from "semantic-ui-react";
import './App.css';
import TabBarContainer from "./features/tabs/TabBarContainer";
import tabs from "./assets/tabsData";

function App() {
  return (
    <div className="App">
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
