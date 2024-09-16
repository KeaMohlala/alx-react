import React, { useContext } from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import AppContext from "../App/AppContext";
import "./Footer.css";

export default function Footer() {
  const { user } = useContext(AppContext);
  const isIndexPage = true;

  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(isIndexPage)}
      </p>
      {user.isLoggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </footer>
  );
}
