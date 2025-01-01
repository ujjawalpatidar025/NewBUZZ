import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, LogOut } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Users", href: "/users" },
  { title: "Analytics", href: "/analytics" },
  { title: "Settings", href: "/settings" },
];

function MobileNav({ items, setIsOpen }) {
  return (
    <div className="flex flex-col space-y-3">
      {items.map((item) => (
        <Link
          key={item.title}
          to={item.href}
          className="text-foreground/70 transition-colors hover:text-foreground"
          onClick={() => setIsOpen(false)}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handeLogout = (e) => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 mx-auto w-full sm:w-5/6">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav items={navItems} setIsOpen={setIsOpen} />
          </SheetContent>
        </Sheet>
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              New Buzz Admin
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <p className="font-bold md:hidden">New Buzz Admin</p>
          </div>
          <Button variant="ghost" size="icon" onClick={handeLogout}>
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Log out</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
