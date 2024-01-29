import HttpClient from './http.js';
import { baseUrl } from '../utilities/config.js';

// export const getAllCourses = async () => {
//   try {
//     const url = `${baseUrl}/${courses}`;
//     const http = new HttpClient(url);
//     const courses = await http.get();
//     return courses;
//   } catch (error) {
//     throw error;
//   }
// };

export const getCourseDetails = async (id) => {
  try {
    return await new HttpClient().get(`courses/${id}`);
  } catch (error) {
    throw error;
  }
};
