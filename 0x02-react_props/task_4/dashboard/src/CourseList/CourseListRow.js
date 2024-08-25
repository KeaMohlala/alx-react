import React from "react";
import PropTypes from "prop-types";

export default function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell,
}) {
  CourseListRow.PropTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
  };

  CourseListRow.defaultProps = {
    textSecondCell: null,
    isHeader: false,
  };
  return (
    <tr>
      {isHeader && !textSecondCell && <th colSpan={2}>{textFirstCell}</th>}
      {isHeader && textSecondCell && (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      )}
      {!isHeader && (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}
