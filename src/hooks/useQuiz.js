import { useState } from "react";

import { api } from "../helpers/api";

const convertResults = (data = []) => {
  return data.map((item, index) => ({
    ...item,
    id: index,
    answers: [...item.incorrect_answers, item.correct_answer].sort(
      () => 0.5 - Math.random()
    ),
  }));
};

const useQuiz = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async ({ category, difficulty }) => {
    setIsFetching(true);
    try {
      const response = await api.get("/api.php", {
        params: {
          type: "multiple",
          amount: 5,
          category,
          difficulty,
        },
      });
      setData(convertResults(response?.data?.results));
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setIsFetching(false);
    }
  };

  return { data, isFetching, error, fetchData };
};

export default useQuiz;
