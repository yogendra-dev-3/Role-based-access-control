export const getData = (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error retrieving data from local storage", error);
      return null;
    }
  };