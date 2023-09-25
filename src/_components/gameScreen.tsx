import "./AllGameCSS.css";
import { useState, useEffect } from "react";
import data from "../assets/data.json";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

// Define a type for your data
type QuestionData = {
  id: number;
  question: string;
  answer: string;
  IQ_Level: string;
};

function GameScreen() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [answerButton, setShowAnswerButton] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionData | null>(
    null
  ); // Set the initial state as null or your QuestionData type

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    background: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleCheckAnswer = () => {
    setShowAnswerButton(true);
  };

  useEffect(() => {
    // Reset the answerButton state when the modal is closed
    if (!open) {
      setShowAnswerButton(false);
    }
  }, [open]);

  return (
    <>
      <p className="heading">Pick A Question</p>
      <div className="container">
        {data.map((question: QuestionData) => (
          <div
            className="card"
            key={question.id}
            onClick={() => {
              setSelectedQuestion(question);
              handleOpen();
            }}
          >
            <p>IQ: {question.IQ_Level}</p>
          </div>
        ))}
      </div>

      {selectedQuestion && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          disableEnforceFocus
          closeAfterTransition
        >
          <Box sx={style}>
            <p>{selectedQuestion.question}</p>

            <input
              type="text"
              name="answer"
              id="inputData"
              placeholder="Enter Your Answer..."
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={answerButton}
            />
            <br />
            <br />

            <button type="button" onClick={handleCheckAnswer}>
              Check Your answer with mine.
            </button>

            {answerButton && <p>Answer: <span style={{color:"orange",fontSize:"xx-large"}}>{selectedQuestion.answer}</span> </p>}
          </Box>
        </Modal>
      )}
    </>
  );
}

export default GameScreen;
