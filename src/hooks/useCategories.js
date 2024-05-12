import { useEffect, useState } from "react";

import { api } from "../helpers/api";
import { showErrorMessage } from "../helpers/error";

const useCategories = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const response = await api.get("/api_category.php");
        setData(response?.data?.trivia_categories || []);
        setError(null);
      } catch (error) {
        setError(error);
        showErrorMessage("Failed to get category data.");
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  return { data, isFetching, error };
};

export default useCategories;
