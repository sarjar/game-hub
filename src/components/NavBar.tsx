import { Box, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack paddingBottom="5px">
      <Link to={"/"}>
        <Box width={"45px"}>
          <Image src={logo} boxSize="60px" objectFit={"cover"} />
        </Box>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
