import api from "./api";

export const findAll = async (page = 1) => {
  try {
    const { data } = await api.get("starships/", {
      params: {
        page,
      },
    });

    if (data.next) {
      const starships = await findAll(page + 1);
      return [...data.results, ...starships];
    } else {
      return data.results;
    }
  } catch (error) {
    console.log("error", error);
    return [];
  }
};
