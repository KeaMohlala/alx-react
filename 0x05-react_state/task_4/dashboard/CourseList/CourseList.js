import React from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";

export default function CourseList({ listCourses }) {
  CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
  };
  CourseList.defaultProps = {
    listCourses: [],
  };
  return (
    <table className={css(styles.CourseList)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow
            isHeader={false}
            textFirstCell="No course available yet"
          />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  CourseList: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    padding: "8px",
    border: "1px solid #ddd",
    textAlign: "left",
    fontWeight: "bold",
    backgroundColor: "#f2f2f2",
  },

  td: {
    padding: "8px",
    border: "1px solid #ddd",
    textAlign: "left",
  },

  evenRow: {
    backgroundColor: "#f9f9f9",
  },
});
