import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import useCategories from "../hooks/useCategories";

const DIFFICULTY_LEVELS = [
  { value: "easy", name: "Easy" },
  { value: "medium", name: "Medium" },
  { value: "hard", name: "Hard" },
];

const CreateForm = ({ handleCreate, isFetching }) => {
  const { data: categories } = useCategories();

  const [criteria, setCriteria] = useState({
    category: "",
    difficulty: "",
  });

  const disabledCreate =
    !criteria.category || !criteria.difficulty || isFetching;

  const handleChangeCategory = (e) => {
    setCriteria((prev) => ({ ...prev, category: e.target.value }));
  };

  const handleChangeDifficulty = (e) => {
    setCriteria((prev) => ({ ...prev, difficulty: e.target.value }));
  };

  const onClickCreate = () => {
    if (handleCreate) {
      handleCreate(criteria);
    }
  };

  return (
    <Form>
      <Row className="g-2">
        <Col xs={12} md={5}>
          <Form.Select
            id="categorySelect"
            value={criteria.category}
            onChange={handleChangeCategory}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs={12} md={5}>
          <Form.Select
            id="difficultySelect"
            value={criteria.difficulty}
            onChange={handleChangeDifficulty}
          >
            <option value="">Select difficulty</option>
            {DIFFICULTY_LEVELS.map((level) => (
              <option key={level.value} value={level.value}>
                {level.name}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs={2}>
          <Button
            id="createBtn"
            variant="outline-secondary"
            onClick={onClickCreate}
            disabled={disabledCreate}
          >
            Create
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateForm;
