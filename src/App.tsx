import { Box, MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./Game";
import Navigation from "./Navigation";
import NewGame from "./NewGame";

const App = () => {
  return (
    <BrowserRouter>
      <MantineProvider theme={{ colorScheme: "dark" }}>
        <Box
          sx={(theme) => ({
            margin: 0,
            padding: 0,
            height: "100vh",
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            textAlign: "center",
          })}
        >
          <Navigation />
          <Routes>
            <Route path="/" element={<h1>Test</h1>} />
            <Route path="/new-game" element={<NewGame />} />
            <Route path="/:gameId" element={<Game />} />
          </Routes>
        </Box>
      </MantineProvider>
    </BrowserRouter>
  );
};

export default App;
