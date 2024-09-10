import React from "react";
import PropTyes from "prop-types";
import "./BodySectionWithMarginBottom.css";
import BodySection from "./BodySection";

export default function BodySectionWithMarginBottom(props) {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTyes.string.isRequired,
  children: PropTyes.node.isRequired,
};
