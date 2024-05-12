import { Button, Stack } from "react-bootstrap";

const QuestionItem = ({ question, answer, handleAnswer, showResult }) => {
  const renderAnswers = () => {
    return question.answers.map((answerItem, index) => {
      const isSelected = answerItem === answer;
      const isCorrect = answerItem === question.correct_answer;
      const isIncorrect = isSelected && answerItem !== question.correct_answer;

      const variant = showResult
        ? isCorrect
          ? "success"
          : isIncorrect
          ? "danger"
          : "outline-secondary"
        : isSelected
        ? "secondary"
        : "outline-secondary";

      return (
        <Button
          key={index}
          dangerouslySetInnerHTML={{ __html: answerItem }}
          variant={variant}
          onClick={() => handleAnswer(question.id, answerItem)}
          className={showResult ? "pe-none" : ""}
        />
      );
    });
  };

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: question.question }}></div>
      <Stack direction="horizontal" gap={2} className="flex-wrap mt-2">
        {renderAnswers()}
      </Stack>
    </div>
  );
};

export default QuestionItem;
