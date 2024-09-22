import { courseReducer } from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

describe('courseReducer tests', () => {
  const courses = [
    { id: 1, name: 'React' },
    { id: 2, name: 'Redux' }
  ];

  const normalizedData = {
    entities: {
      courses: {
        '1': { id: 1, name: 'React' },
        '2': { id: 2, name: 'Redux' }
      }
    }
  };

  const initialState = fromJS({
    courses: {},
    selectedCourseIds: []
  });

  it('should return the initial state', () => {
    const state = courseReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should handle FETCH_COURSE_SUCCESS and normalize the data', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: courses
    };

    const state = courseReducer(undefined, action);
    expect(state.toJS()).toEqual({
      courses: normalizedData.entities.courses,
      selectedCourseIds: []
    });
  });

  it('should handle SELECT_COURSE', () => {
    const action = {
      type: SELECT_COURSE,
      index: 1
    };

    const state = courseReducer(initialState, action);
    expect(state.get('selectedCourseIds')).toEqual([1]);
  });

  it('should handle UNSELECT_COURSE', () => {
    const stateWithSelected = initialState.set('selectedCourseIds', fromJS([1]));

    const action = {
      type: UNSELECT_COURSE,
      index: 1
    };

    const state = courseReducer(stateWithSelected, action);
    expect(state.get('selectedCourseIds')).toEqual([]);
  });
});
