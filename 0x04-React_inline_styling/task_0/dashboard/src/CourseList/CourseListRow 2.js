import React from "react";
import PropTypes from "prop-types";

export default function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell,
}) {
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
