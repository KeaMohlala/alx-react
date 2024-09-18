import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

export default function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell,
}) {
  // State to track if the row is checked
  const [isChecked, setIsChecked] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checked state
  };

  CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  CourseListRow.defaultProps = {
    textSecondCell: null,
    isHeader: false,
  };

  return (
    <tr
      className={css(
        isHeader
          ? styles.headerStyle
          : isChecked
          ? styles.rowChecked
          : styles.rowStyle
      )}
    >
      {isHeader && !textSecondCell && (
        <th colSpan={2} className={css(styles.headerCell)}>
          {textFirstCell}
        </th>
      )}
      {isHeader && textSecondCell && (
        <>
          <th className={css(styles.headerCell)}>{textFirstCell}</th>
          <th className={css(styles.headerCell)}>{textSecondCell}</th>
        </>
      )}
      {!isHeader && (
        <>
          <td className={css(styles.rowCell)}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            {textFirstCell}
          </td>
          <td className={css(styles.rowCell)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#deb5b545",
  },
  rowStyle: {
    backgroundColor: "#f5f5f5ab",
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
  headerCell: {
    fontWeight: "bold",
    textAlign: "center",
  },
  rowCell: {
    textAlign: "left",
  },
});
