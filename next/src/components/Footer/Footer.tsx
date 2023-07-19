import React, { FC } from "react";
import Link from 'next/link'
import "./Footer.css";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <Link href="/page1">Page 1</Link>
      <Link href="/page2">Page 2</Link>
      <Link href="/page3">Page 3</Link>
    </footer>
  );
};

export { Footer };
