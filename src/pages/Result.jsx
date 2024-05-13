import { Button } from "react-bootstrap";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import QuestionList from "../components/QuestionList";

const Result = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state || !state?.questions || !state?.answers) {
    return <Navigate to="/" replace />;
  }

  const { questions = [], answers = {} } = state;

  const finalScore = questions.reduce(
    (total, q) => (q.correct_answer === answers[q.id] ? total + 1 : total),
    0
  );

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <h4 className="mb-3">Results</h4>

      <QuestionList questions={questions} answers={answers} showResult />

      <div
        className="w-75 mx-auto mt-5 mb-4 text-center"
        style={{
          backgroundColor:
            finalScore <= 1 ? "red" : finalScore <= 3 ? "yellow" : "green",
        }}
      >
        You scored {finalScore} out of {questions.length}
      </div>

      <Button variant="secondary" className="w-100" onClick={handleBack}>
        Create a new quiz
      </Button>
    </>
  );
};

export default Result;
