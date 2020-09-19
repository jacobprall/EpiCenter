import React from "react";
import { Link } from "react-router-dom";
import { Header, Logo, LogoImage, NavToggleInput, NavToggleLabel, NavContainer, LinkList, LinkItem, SignInButton,  } from './navbar_style'
// import { useHistory } from 'react-router-dom'

export default function Navbar() {
  return (
    <Header>
      <Logo>
        <LogoImage />
      </Logo>
      <NavToggleInput />
      <NavContainer>
        <LinkList>
          ListItem 
        </LinkList>
        <LinkList to="/">Home</LinkList>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </NavContainer>
    </Header>
  );
}
