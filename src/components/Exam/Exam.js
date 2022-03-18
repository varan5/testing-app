import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const ExamComponent = ({ examData }) => {

  const [selectedCorrectOption, setSelectedCorrectOption] = useState(null)
  const [originalCurrentOption, setOriginalCorrectOption] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [questionHint, setQuestionHint] = useState('')
  const [currentScore, setCurrentScore] = useState(0)
  const [question, setQuestion] = useState("")
  const [option0, setOption0] = useState("")
  const [option1, setOption1] = useState("")
  const [option2, setOption2] = useState("")
  const [option3, setOption3] = useState("")

  const handleExamSubmit = () => {
    console.log('Correct option is: ' + selectedCorrectOption)
  }

  const checkIsQuizCompleted = () => {
    if (currentQuestionIndex == examData.length) {
      return true;
    } else {
      return false;
    }
  }

  const evaluatePreviousQuestionsMarks = () => {
    if ((currentQuestionIndex == examData.length)) {
      return;
    }
    const correctOption = examData[currentQuestionIndex]["correctOption"]
    console.log('correctOption value is: ' + correctOption)
    if (correctOption == selectedCorrectOption) {
      setCurrentScore(currentScore + 1)
    }
  }

  const clearPreviousSelectedOption = () => {
    setSelectedCorrectOption(null)
  }

  const handleNextQuestion = () => {
    const quizCompletedFlag = checkIsQuizCompleted()
    if (quizCompletedFlag == true) {
      return false;
    }
    clearPreviousSelectedOption()
    evaluatePreviousQuestionsMarks()

    if (currentQuestionIndex + 1 < examData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      toast.success('No more question')
      return
    }

    const nextQuestion = examData[currentQuestionIndex]["question"]
    const nextQuestionOption0 = examData[currentQuestionIndex]["options"][0]
    const nextQuestionOption1 = examData[currentQuestionIndex]["options"][1]
    const nextQuestionOption2 = examData[currentQuestionIndex]["options"][2]
    const nextQuestionOption3 = examData[currentQuestionIndex]["options"][3]
    const nextQuestionHint = examData[currentQuestionIndex]["hint"]
    setQuestion(nextQuestion)
    setOption0(nextQuestionOption0)
    setOption1(nextQuestionOption1)
    setOption2(nextQuestionOption2)
    setOption3(nextQuestionOption3)
    setQuestionHint(nextQuestionHint)
    return true;
  }

  const setFirstQuestion = () => {
    const firstQuestion = examData[currentQuestionIndex]["question"]
    const firstQuestionOption0 = examData[currentQuestionIndex]["options"][0]
    const firstQuestionOption1 = examData[currentQuestionIndex]["options"][1]
    const firstQuestionOption2 = examData[currentQuestionIndex]["options"][2]
    const firstQuestionOption3 = examData[currentQuestionIndex]["options"][3]
    const firtQuestionHint = examData[currentQuestionIndex]["hint"]
    setQuestion(firstQuestion)
    setOption0(firstQuestionOption0)
    setOption1(firstQuestionOption1)
    setOption2(firstQuestionOption2)
    setOption3(firstQuestionOption3)
    setQuestionHint(firtQuestionHint)
  }

  useEffect(() => {
    setFirstQuestion()
  })

  return (
    <Box sx={{ width: '100%', maxWidth: 345, bgcolor: 'background.paper' }}>

      <List>
        <ListItem disablePadding style={{ background: '#FFC898' }}>
          <ListItemButton>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary={`Q${currentQuestionIndex + 1}.   ${question}`} secondary={`Hint: ${questionHint}`} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={() => { setSelectedCorrectOption(0) }} style={{ background: selectedCorrectOption == 0 ? '#FF9292' : 'white' }} >
          <ListItemButton>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary={option0} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={() => setSelectedCorrectOption(1)} style={{ background: selectedCorrectOption == 1 ? '#FF9292' : 'white' }} >
          <ListItemButton>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary={option1} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={() => setSelectedCorrectOption(2)} style={{ background: selectedCorrectOption == 2 ? '#FF9292' : 'white' }}>
          <ListItemButton>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary={option2} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={() => setSelectedCorrectOption(3)} style={{ background: selectedCorrectOption == 3 ? '#FF9292' : 'white' }}>
          <ListItemButton>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary={option3} />
          </ListItemButton>
        </ListItem>
        <button onClick={handleExamSubmit}>Submit</button>
        <button onClick={handleNextQuestion}>Next Question</button>
        <h4>Current score: {currentScore}</h4>
      </List>
    </Box>
  );
}

export default ExamComponent