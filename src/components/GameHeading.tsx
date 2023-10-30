import { Heading } from "@chakra-ui/react";
import useGanre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

function GameHeading() {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGanre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  return (
    <Heading as={"h1"} marginY={2} fontSize={"5xl"}>
      {`${platform?.name || ""} ${genre?.name || ""} Games`}
    </Heading>
  );
}

export default GameHeading;
