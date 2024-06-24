import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/hand-drawn-gaming-logo-template_23-2150730869.avif";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px" />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
