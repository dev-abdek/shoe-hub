import axios from "axios";

const baseUrl = "http://localhost:3001/notes";

const getAll = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data;
};

const create = async (noteObject) => {
  const request = axios.post(baseUrl, noteObject);
  const response = await request;
  return response.data;
};

const update = async (id, noteObject) => {
  const request = axios.put(`${baseUrl}/${id}`, noteObject);
  const response = await request;
  return response.data;
};

export default {
  getAll,
  create,
  update,
};
