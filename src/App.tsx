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
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX='5px'>
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
