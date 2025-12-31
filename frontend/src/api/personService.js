import axios from "axios";

const API_URL = "http://localhost:8080/SoaBackend/api/persons";

export const getAllPersons = () => axios.get(API_URL);

export const addPerson = (person) => axios.post(API_URL, person);

export const updatePerson = (person) =>
  axios.put(`${API_URL}/${person.id}`, person);

export const deletePerson = (id) => axios.delete(`${API_URL}/${id}`);

export const searchByName = (name) => axios.post(`${API_URL}/search/${name}`);

// export const loadPersons = async () => {
//   const res = await getAllPersons();
//   console.log(res.data);
//   return res.data;
// };
