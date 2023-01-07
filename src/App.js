import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/Counter";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor="#282c34"
      color="#ffffff"
    >
      <img src={logo} className="App-logo" alt="logo" width="30%" />
      <Counter initialCount={0} />
    </Box>
  );
}

export default App;
