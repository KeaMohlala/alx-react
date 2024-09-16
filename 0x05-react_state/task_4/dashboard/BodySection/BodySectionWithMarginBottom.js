import React from "react";
import PropTyes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import BodySection from "./BodySection";

export default function BodySectionWithMarginBottom(props) {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTyes.string.isRequired,
  children: PropTyes.node.isRequired,
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginbottom: "40px",
  },
});
