import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  NavbarItem,
} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.tsx";
import {ThemeSwitcher} from "../Theme/ThemeSwitcher.tsx";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Profile", "Settings", "Help & Feedback", "Log Out"];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">JewelsPlanet</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher/>
        </NavbarItem>
        <NavbarMenuToggle className="sm:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={index === 1 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavigationBar;

