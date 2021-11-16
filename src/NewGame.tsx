import { Box, Button, Text, TextInput } from "@mantine/core";
import { useNavigate, generatePath } from "react-router-dom";
import { GAME } from "./routes";

const NewGame = () => {
  const navigate = useNavigate();

  const createGame = () => {
    const gameRoute = generatePath(GAME, {
      gameId: "1",
    });
    navigate(gameRoute);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        margin: "0 auto",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          marginTop: "1.5rem",
        }}
      >
        <Text size="xl" sx={{ marginBottom: "1.5rem" }}>
          Choose a name for your poker game.
        </Text>
        <TextInput placeholder="Your game name" variant="filled" size="lg" />
        <Button
          size="lg"
          sx={{
            marginTop: "1.5rem",
          }}
          fullWidth
          onClick={createGame}
        >
          Create game
        </Button>
      </Box>
    </Box>
  );
};

export default NewGame;
