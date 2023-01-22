import { Route, Routes } from "react-router-dom";

// App Components
import Landing from "./components/Landing";
import ListContainer from "./components/ListContainer";
import NotFound from "./components/NotFound";

// Styled Components
import { AppContainer } from "./components/styles/Containers.styled";
import { ThemeProvider } from "styled-components";
import { Colors } from "./components/styles/Colors";
function App() {
  const theme = {
    colors: Colors
  };
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="todo"
            element={<ListContainer isTodo={true} />}
          />
          <Route
            path="shopping"
            element={
              <ListContainer isShopping={true} />
            }
          />
          <Route path="*" element={<NotFound/>} style={{backgroundColor: '#FAD470'}}></Route>
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
