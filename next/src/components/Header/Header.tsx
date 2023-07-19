"use client"

import React, { FC, useMemo } from "react";
import "./Header.css";
import {usePathname} from "next/navigation";

const Header: FC = () => {
  const pathname = usePathname()

  const pageName = useMemo(() => {
    switch (pathname) {
      case "/page1":
        return "Page 1";
      case "/page2":
        return "Page 2";
      case "/page3":
        return "Page 3";
      default:
        return "Some Page";
    }
  }, [pathname]);

  return <header className="header">{pageName}</header>;
};

export { Header };
