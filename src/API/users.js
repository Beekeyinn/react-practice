import axios from "axios";

export const userApi = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/users?limit=20");
    return await response.data.users;
  } catch (error) {
    console.log(error);
  }
};

export const searchUser = async (param) => {
  try {
    const res = await axios.get(
      `https://dummyjson.com/users/search?q=${param}`
    );
    console.log(res.data);
    return await res.data;
  } catch (error) {}
};
