import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS, Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

//initial state using Immutable.js Map
const initialState = Map({
  courses: Map();
  selectedCourseIds:[]
});

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const normalizedData = coursesNormalizer(action.data);
      return state.merge({
        courses: fromJS(normalizedData.entities.courses),
      });
    }

    case SELECT_COURSE:
      return state.update('selectedCourseIds', (selected) =>
        selected.concat(action.index)
      );
    }


    case UNSELECT_COURSE:
      return state.update('selectedCourseIds', (selected) =>
        selected.filter(id => id !== action.index)
      );
    }

    default:
      return state;
  }
};

export default courseReducer;
