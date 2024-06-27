import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";
import GenresList from "./Components/GenresList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" " main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
            <GenresList />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
