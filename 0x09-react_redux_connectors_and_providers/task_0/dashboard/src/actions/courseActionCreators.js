import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index
  };
}

export const boundSelectCourse = (dispatch) => (index) => dispatch(selectCourse(index));

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index
  };
}

export const boundUnSelectCourse = (dispatch) => (index) => dispatch(unSelectCourse(index));
