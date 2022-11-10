const URL = "https://api.github.com/users?per_page=5";

export const getUsers = async () => {
  const response = await fetch(URL);

  return response.json();
};
