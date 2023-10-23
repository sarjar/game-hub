import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGanre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const genre = useGanre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  return (
    <Heading as={"h1"} marginY={2} fontSize={"5xl"}>
      {`${platform?.name || ""} ${genre?.name || ""} Games`}
    </Heading>
  );
}

export default GameHeading;
