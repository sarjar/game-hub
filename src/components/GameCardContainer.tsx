import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box
      borderRadius={10}
      overflow={"hidden"}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .2s ease-in-out",
      }}
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
