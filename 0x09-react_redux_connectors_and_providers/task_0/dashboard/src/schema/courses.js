import { schema, normalize } from 'normalizr';

const course = new schema.Entity('courses');

// function to normalize data
export const coursesNormalizer = (data) => {
  return normalize(data, [course]);
};
