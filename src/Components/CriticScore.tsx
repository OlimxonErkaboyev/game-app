import { Badge, Stack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const CriticScore = ({ game }: Props) => {

  return (
    <Stack direction="row">
      <Badge
        color="white.500"
        padding="2px 10px"
        borderRadius="4px"
        colorScheme="green"
      >
        {game.metacritic}
      </Badge>
    </Stack>
  );
};

export default CriticScore;
