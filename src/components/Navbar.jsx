//packages
import { Link } from "react-router-dom";
import React from "react";
import { Box, Image } from "@chakra-ui/react";

//local imports
import "../App.css"

function Navbar() {
  return (
    <>
      <Box border={"1px solid red"} h={"12vh"} display={'flex'} justifyContent={"center"} alignContent={"center"}>
        {/* Logo */}
        <Image
          src="https://dhanushs3103.github.io/Dhanush-portfolio/images/logo.png"
          h={"12vh"}
          alt="logo"
        />
        {/* Links */}
        <Box border={"1px solid black"} height={'fit-content'} mt={6} display={"flex"} justifyContent={"space-between"} alignContent={"center"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
