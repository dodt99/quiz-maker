import { Stack } from "react-bootstrap";

import QuestionItem from "./QuestionItem";

const QuestionList = ({ questions, answers, handleAnswer, showResult }) => {
  return (
    <Stack gap={4}>
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          question={question}
          answer={answers[question.id]}
          handleAnswer={handleAnswer}
          showResult={showResult}
        />
      ))}
    </Stack>
  );
};

export default QuestionList;
