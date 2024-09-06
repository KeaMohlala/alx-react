import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import "./Footer.css";

export default function Footer() {
  const isIndexPage = true;

  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(isIndexPage)}
      </p>
    </footer>
  );
}
