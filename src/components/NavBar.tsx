import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSerach: (searchText: string) => void;
}

function NavBar({ onSerach }: Props) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSerach={onSerach} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;