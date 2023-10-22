import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCropedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCropedImageUrl(game.background_image)} title={game.name} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};
