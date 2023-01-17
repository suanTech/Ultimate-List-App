
import { Route, Routes } from "react-router-dom";

// App Components
import Landing from "./components/Landing";
import ListContainer from "./components/ListContainer";

// Styled Components
import { AppContainer } from "./components/styles/Containers.styled";

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="todo" element={<ListContainer initialName={'Todo List'} isTodo={true}/>} />
        <Route path="shopping" element={<ListContainer initialName={'Shopping List'} isShopping={true}/>} />
      </Routes>
    </AppContainer>
  );
}

export default App;
