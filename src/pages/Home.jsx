import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import CreateForm from "../components/CreateForm";
import QuestionList from "../components/QuestionList";
import useQuiz from "../hooks/useQuiz";

const Home = () => {
  const navigate = useNavigate();
  const { data: questions, isFetching, error, fetchData } = useQuiz();
  const [answers, setAnswers] = useState({});

  const isAnsweredAll =
    !!questions.length && questions.every((q) => !!answers[q.id]);

  const handleCreate = (payload) => {
    fetchData(payload);
    setAnswers({});
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const hanldeSubmit = () => {
    navigate("/result", { state: { questions, answers } });
  };

  return (
    <>
      <CreateForm handleCreate={handleCreate} isFetching={isFetching} />

      <div className="py-5">
        {!!error ? (
          <p className="text-danger">Something went wrong.</p>
        ) : isFetching ? (
          <Spinner variant="primary" className="d-block mx-auto mt-3" />
        ) : questions.length === 0 ? (
          <p className="text-info">No quiz available!</p>
        ) : questions.length !== 0 ? (
          <QuestionList
            questions={questions}
            answers={answers}
            handleAnswer={handleAnswer}
          />
        ) : (
          <></>
        )}
      </div>

      {isAnsweredAll && (
        <Button
          className="d-block w-75 mx-auto mb-3"
          variant="info"
          onClick={hanldeSubmit}
        >
          Submit
        </Button>
      )}
    </>
  );
};

export default Home;
