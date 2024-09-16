import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

export default class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, id, markAsRead } = this.props;
    return (
      <li
        className={css(
          type === "default" ? styles.default : styles.urgent,
          styles.responsiveItem
        )}
        data-notification-type={type}
        onClick={() => markAsRead(id)}
        dangerouslySetInnerHTML={html ? html : undefined}
      >
        {html ? null : value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string,
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
};

const styles = StyleSheet.create({
  default: {
    color: "blue",
    cursor: "pointer",
  },
  urgent: {
    color: "red",
    cursor: "pointer",
  },
  responsiveItem: {
    "@media (max-width: 900px)": {
      width: "100%",
      fontSize: "20px",
      padding: "10px 8px",
      borderBottom: "1px solid black",
    },
  },
});
