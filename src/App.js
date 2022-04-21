import React, { useState } from 'react';

import Share from './Share';

const hostURL = 'https://app.thatsiguy.com'

export default function App() {
	const questions = [
		{
			questionText: 'When you meet new people do you',
			answerOptions: [
				{ answerText: 'Talk as much as you listen?', isCorrect: true },
        { answerText: 'Listen more than you talk?', isCorrect: false },
      ],
      category: 'IntraExtra',
		},
		{
			questionText: 'Which statement characterises your general approach to life?',
			answerOptions: [
				{ answerText: 'Just do it', isCorrect: true },
				{ answerText: 'Check out the alternatives', isCorrect: false },
      ],
      category: 'Perceiving'
		},
		{
			questionText: 'Which do you like more about yourself:',
			answerOptions: [
				{ answerText: 'your cool-headed, logical approach?', isCorrect: true },
				{ answerText: 'your warm, understanding approach?', isCorrect: false },
      ],
      category: 'Judging'
		},
		{	questionText: 'Which are you better at',
			answerOptions: [
				{ answerText: 'Shifting gears when necessary?', isCorrect: true },
				{ answerText: 'Focusing on one task until it\'s done?', isCorrect: false },
      ],
      category: 'Final'
		},
		{
			questionText: 'Do you prefer a social life that includes',
			answerOptions: [
				{ answerText: 'Many friends and acquaintances?', isCorrect: true },
        { answerText: 'a few people that you feel close to?', isCorrect: false },
      ],
      category: 'IntraExtra',
		},
		{
			questionText: 'When you\'re trying to understand something, do you',
			answerOptions: [
				{ answerText: 'press for specifics?', isCorrect: true },
				{ answerText: 'get an overall picture and fill in the details later?', isCorrect: false },
      ],
      category: 'Perceiving'
		},
		{
			questionText: 'Which is more interesting to you:',
			answerOptions: [
				{ answerText: 'knowing how people think?', isCorrect: true },
				{ answerText: 'knowing how people feel?', isCorrect: false },
      ],
      category: 'Judging'
		},
		{	questionText: 'What kind of job do you like better',
			answerOptions: [
				{ answerText: 'one that allows you to react quickly and improvise?', isCorrect: true },
				{ answerText: 'one that allows you to determine goals and take steps to meet them?', isCorrect: false },
      ],
      category: 'Final'
		},
		{
			questionText: 'A heavy snowfall keeps you from going to school or work, do you',
			answerOptions: [
				{ answerText: 'wonder what you\'re missing?', isCorrect: true },
        { answerText: 'enjoy the unexpected time alone?', isCorrect: false },
      ],
      category: 'IntraExtra',
		},
		{
			questionText: 'Which statement are you more likely to make?',
			answerOptions: [
				{ answerText: 'I\'m interested in people\'s experience — what they do, who they know', isCorrect: true },
				{ answerText: 'I\'m interested in people\'s plans and dreams — where they\'re going, what they envision', isCorrect: false },
      ],
      category: 'Perceiving'
		},
		{
			questionText: 'Which statement...',
			answerOptions: [
				{ answerText: 'I\'m good at making a plan that will work', isCorrect: true },
				{ answerText: 'I\'m good at getting others to agree with a plan and cooperate in the effort', isCorrect: false },
      ],
      category: 'Judging'
		},
		{	questionText: 'Which statement...',
			answerOptions: [
				{ answerText: 'I may try something impulsively, just to see what happens', isCorrect: true },
				{ answerText: 'I want to know what\'s likely to happen before I try something', isCorrect: false },
      ],
      category: 'Final'
		},
		{
			questionText: 'Which statement...',
			answerOptions: [
				{ answerText: 'I usually think on my feet, as I\'m talking', isCorrect: true },
        { answerText: 'I usually reflect on what I\'m going to say before I say it', isCorrect: false },
      ],
      category: 'IntraExtra',
		},
		{
			questionText: 'Which statement...',
			answerOptions: [
				{ answerText: 'I\'m almost always aware of how things look', isCorrect: true },
				{ answerText: 'I may not notice much about how things look — at least not right away', isCorrect: false },
      ],
      category: 'Perceiving'
		},
		{
			questionText: 'Which statement...',
			answerOptions: [
				{ answerText: 'I tend to be an analytical sort, maybe a little skeptical', isCorrect: true },
				{ answerText: 'I\'m interested in people and care about what happens to them', isCorrect: false },
      ],
      category: 'Judging'
		},
		{	questionText: 'Which statement...',
			answerOptions: [
				{ answerText: 'I like to leave room for new options, even after plans have been made', isCorrect: true },
				{ answerText: 'Once plans have been made, I want to be able to count on them', isCorrect: false },
      ],
      category: 'Final'
		},
		{
			questionText: 'Which statement...',
			answerOptions: [
				{ answerText: 'People who know me are generally aware of what\'s important to me', isCorrect: true },
        { answerText: 'I don\'t talk about what\'s really important to me unless I feel close to someone', isCorrect: false },
      ],
      category: 'IntraExtra',
		},
		{
			questionText: 'Which statement...',
			answerOptions: [
				{ answerText: 'If I enjoy a particular activity, I\'ll engage in it frequently enough to do it well', isCorrect: true },
				{ answerText: 'Once an activity is familiar to me, I want to change it or try something new', isCorrect: false },
      ],
      category: 'Perceiving'
		},
		{
			questionText: 'Which statement...',
			answerOptions: [
				{ answerText: 'When I\'m making a decision, I weigh the pros and cons of my choices', isCorrect: true },
				{ answerText: 'When I\'m making a decision, I\'m interested in what others have done in similar situations', isCorrect: false },
      ],
      category: 'Judging'
		},
		{	questionText: 'Which statement...',
			answerOptions: [
				{ answerText: 'I tend to learn by experience, so I often have my own way of doing things', isCorrect: true },
				{ answerText: 'I generally learn by following instructions and adapting them to my needs', isCorrect: false },
      ],
      category: 'Final'
		},
		{
			questionText: 'Which statement...',
			answerOptions: [
				{ answerText: 'I get restless when I\'m alone too long', isCorrect: true },
        { answerText: 'I get restless when I don\'t have enough time to myself', isCorrect: false },
      ],
      category: 'IntraExtra',
		},
		{
			questionText: 'Which statement...',
			answerOptions: [
				{ answerText: 'I\'m not interested in ideas without some practical application', isCorrect: true },
				{ answerText: 'I like ideas for their own sake and enjoy playing with them in my imagination', isCorrect: false },
      ],
      category: 'Perceiving'
		},
		{
			questionText: 'Which statement...',
			answerOptions: [
				{ answerText: 'When I negotiate, I depend on my knowledge and tactical skills', isCorrect: true },
				{ answerText: 'When I negotiate, I establish common ground with the other person', isCorrect: false },
      ],
      category: 'Judging'
		},
		{	questionText: 'Which statement...',
			answerOptions: [
				{ answerText: 'I need a break now and then when I\'m working on something', isCorrect: true },
				{ answerText: 'I would rather not be interupted when I\'m working on something', isCorrect: false },
      ],
      category: 'Final'
		},
		{
			questionText: 'Which statement...',
			answerOptions: [
				{ answerText: 'When I\'m having a good time with others, I get energised and keep on going', isCorrect: true },
        { answerText: 'When I\'m having a good time with others, my energy runs out and I need space', isCorrect: false },
      ],
      category: 'IntraExtra',
		},
		{
			questionText: 'Which statement...',
			answerOptions: [
				{ answerText: 'My physical surroundings are important to me and affect how I feel', isCorrect: true },
				{ answerText: 'Atmosphere isn\'t all that important to me if I like what I\'m doing', isCorrect: false },
      ],
      category: 'Perceiving'
		},
		{
			questionText: 'Which statement...',
			answerOptions: [
				{ answerText: 'People can count on me to be fair and to treat them with respect', isCorrect: true },
				{ answerText: 'People can count on me to be there when they need me', isCorrect: false },
      ],
      category: 'Judging'
		},
		{	questionText: 'When you\'re on a vacation, are you more likely to',
			answerOptions: [
				{ answerText: 'take things as they come, doing whatever you feel like at the moment', isCorrect: true },
				{ answerText: 'work out a tentative schedule of things you want to do?', isCorrect: false },
      ],
      category: 'Final'
		},
		{
			questionText: 'When you\'re on a vacation...',
			answerOptions: [
				{ answerText: 'spend time doing things with others?', isCorrect: true },
        { answerText: 'take time to read or walk or daydream alone?', isCorrect: false },
      ],
      category: 'IntraExtra',
		},
		{
			questionText: 'When you\'re on a vacation...',
			answerOptions: [
				{ answerText: 'return to a vacation spot you love?', isCorrect: true },
				{ answerText: 'go someplace you\'ve never been before?', isCorrect: false },
      ],
      category: 'Perceiving'
		},
		{
			questionText: 'When you\'re on a vacation...',
			answerOptions: [
				{ answerText: 'take a work- or a school-related project with you?', isCorrect: true },
				{ answerText: 'renew relationships that are important to you?', isCorrect: false },
      ],
      category: 'Judging'
		},
		{	questionText: 'When you\'re on a vacation...',
			answerOptions: [
				{ answerText: 'forget about your everyday routines and concentrate on having fun?', isCorrect: true },
				{ answerText: 'think about things you need to prepare for when the vacation is over?', isCorrect: false },
      ],
      category: 'Final'
		},
		{
			questionText: 'When you\'re on a vacation...',
			answerOptions: [
				{ answerText: 'see famous landmarks?', isCorrect: true },
        { answerText: 'spend time in museums and quieter places?', isCorrect: false },
      ],
      category: 'IntraExtra',
		},
		{
			questionText: 'When you\'re on a vacation...',
			answerOptions: [
				{ answerText: 'have a good meal at a restaurant you really enjoy?', isCorrect: true },
				{ answerText: 'explore new cuisines?', isCorrect: false },
      ],
      category: 'Perceiving'
		},
		{
			questionText: 'Which word best describes the way you see yourself?',
			answerOptions: [
				{ answerText: 'levelheaded', isCorrect: true },
				{ answerText: 'idealistic', isCorrect: false },
      ],
      category: 'Judging'
		},
		{	questionText: 'Which word...?',
			answerOptions: [
				{ answerText: 'spontaneous', isCorrect: true },
				{ answerText: 'systematic', isCorrect: false },
      ],
      category: 'Final'
		},
		{
			questionText: 'Which word...?',
			answerOptions: [
				{ answerText: 'open', isCorrect: true },
        { answerText: 'reflective', isCorrect: false },
      ],
      category: 'IntraExtra',
		},
		{
			questionText: 'Which word...?',
			answerOptions: [
				{ answerText: 'factual', isCorrect: true },
				{ answerText: 'conceptual', isCorrect: false },
      ],
      category: 'Perceiving'
		},
		{
			questionText: 'Which word...?',
			answerOptions: [
				{ answerText: 'knowledgeable', isCorrect: true },
				{ answerText: 'understanding', isCorrect: false },
      ],
      category: 'Judging'
		},
		{	questionText: 'Which word...?',
			answerOptions: [
				{ answerText: 'adaptable', isCorrect: true },
				{ answerText: 'organised', isCorrect: false },
      ],
      category: 'Final'
		},
		{
			questionText: 'Which word...?',
			answerOptions: [
				{ answerText: 'expansive', isCorrect: true },
        { answerText: 'intense', isCorrect: false },
      ],
      category: 'IntraExtra',
		},
		{
			questionText: 'Which word...?',
			answerOptions: [
				{ answerText: 'down-to-earth', isCorrect: true },
				{ answerText: 'imaginative', isCorrect: false },
      ],
      category: 'Perceiving'
		},
		{
			questionText: 'Which word...?',
			answerOptions: [
				{ answerText: 'questioning', isCorrect: true },
				{ answerText: 'questing', isCorrect: false },
      ],
      category: 'Judging'
		},
		{	questionText: 'Which word...?',
			answerOptions: [
				{ answerText: 'enthusiastic', isCorrect: true },
				{ answerText: 'deliberate', isCorrect: false },
      ],
      category: 'Final'
		},
		{
			questionText: 'Which word...?',
			answerOptions: [
				{ answerText: 'well-rounded', isCorrect: true },
        { answerText: 'deep', isCorrect: false },
      ],
      category: 'IntraExtra',
		},
		{
			questionText: 'Which word...?',
			answerOptions: [
				{ answerText: 'seasoned', isCorrect: true },
				{ answerText: 'sprited', isCorrect: false },
      ],
      category: 'Perceiving'
		},
		{
			questionText: 'Which word...?',
			answerOptions: [
				{ answerText: 'just', isCorrect: true },
				{ answerText: 'merciful', isCorrect: false },
      ],
      category: 'Judging'
		},
		{	questionText: 'Which word...?',
			answerOptions: [
				{ answerText: 'open-ended', isCorrect: true },
				{ answerText: 'goal-oriented', isCorrect: false },
      ],
      category: 'Final'
		},
		{
			questionText: 'Which word...?',
			answerOptions: [
				{ answerText: 'straightforward', isCorrect: true },
        { answerText: 'reserved', isCorrect: false },
      ],
      category: 'IntraExtra',
		},
		{
			questionText: 'Which word...?',
			answerOptions: [
				{ answerText: 'realistic', isCorrect: true },
				{ answerText: 'visionary', isCorrect: false },
      ],
      category: 'Perceiving'
		},
		{
			questionText: 'Which word...?',
			answerOptions: [
				{ answerText: 'impartial', isCorrect: true },
				{ answerText: 'sensitive', isCorrect: false },
      ],
      category: 'Judging'
		},
		{	questionText: 'Would you rather?',
			answerOptions: [
				{ answerText: 'put off unpleasant chores until you\'re in the right mood?', isCorrect: true },
				{ answerText: 'get unpleasant chores out of the way so they\'re off your mind?', isCorrect: false },
      ],
      category: 'Final'
		},
		{
			questionText: 'Would you rather?',
			answerOptions: [
				{ answerText: 'be admired for your work, even though you\'re not satisfied with it yourself?', isCorrect: true },
        { answerText: 'create something of lasting worth, but remain largely unknown?', isCorrect: false },
      ],
      category: 'IntraExtra',
		},
		{
			questionText: 'Would you rather?',
			answerOptions: [
				{ answerText: 'have extensive experience in an area that pleases you?', isCorrect: true },
				{ answerText: 'have many options to choose from', isCorrect: false },
      ],
      category: 'Perceiving'
		},
		{
			questionText: 'Which slogan better captures your point of view?',
			answerOptions: [
				{ answerText: 'People are apt to mistake the strength of the their feeling for the strength of their argument', isCorrect: true },
				{ answerText: 'Logic is the art of going wrong with confidence', isCorrect: false },
      ],
      category: 'Judging'
		},
		{	questionText: 'Which slogan...?',
			answerOptions: [
				{ answerText: 'He who hesitates is lost', isCorrect: true },
				{ answerText: 'Look before you leap', isCorrect: false },
      ],
      category: 'Final'
		},

		
		{	questionText: 'Did you enjoy this test?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
      ],
      category: 'Testy'
		},
	];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false)
  		/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */

  const [score1, setScore1] = useState(false)
  const [score2, setScore2] = useState(false)
  const [score3, setScore3] = useState(false)
  const [score4, setScore4] = useState(false)

  const [result1, setResult1] = useState(false)
  const [result2, setResult2] = useState(false)
  const [result3, setResult3] = useState(false)
  const [result4, setResult4] = useState(false)

  
  
  const handleAnswerButtonClick = (isCorrect, category) => {
    if(category==='IntraExtra'){
      if(isCorrect===true){
        setScore1(score1 + 1)
      }
    }
    if(category==='Perceiving'){
      if(isCorrect===true){
        setScore2(score2 + 1)
      }
    }
    if(category==='Judging'){
      if(isCorrect===true){
        setScore3(score3 + 1)
      }
    }
    if(category==='Final'){
      if(isCorrect===true){
        setScore4(score4 + 1)
      }
    }
  
    if(score1>7) {
      setResult1('E')
    } if(score1<7) {
      setResult1('I')
    } if(score1===7) {
      setResult1('E/I')
    }
    if(score2>7) {
      setResult2('S')
    } if(score2<7) {
      setResult2('N')
    } if(score2===7) {
      setResult2('S/N')
    }
    if(score3>7) {
      setResult3('T')
    } if(score3<7) {
      setResult3('F')
    } if(score3===7) {
      setResult3('T/F')
    }
    if(score4>7) {
      setResult4('P')
    } if(score4<7) {
      setResult4('J')
    } if(score4===7) {
      setResult4('P/J')
    }
        
    const nextQuestion = currentQuestion + 1
    if(nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
}

	const shareStatement = 'I got '+result1+result2+result3+result4+'. This is the best test'


	return (
		<div className='app'>
	
			{showScore ? (
				// answer view
				<div className='container'>
				<div className='score-section'>You are {result1}{result2}{result3}{result4}</div>
				<div className='score-details'>
					{result1} {Math.round((score1 < 7) ? (100-(score1/14*100)) : (score1/14*100))} percent<br></br>
					{result2} {Math.round((score2 < 7) ? (100-(score2/14*100)) : (score2/14*100))} percent<br></br>
					{result3} {Math.round((score3 < 7) ? (100-(score3/14*100)) : (score3/14*100))} percent<br></br>
					{result4} {Math.round((score4 < 7) ? (100-(score4/14*100)) : (score4/14*100))} percent
				</div>
				<div className='bkDesc'>
		Questions are from Lenore Thomson's excellent book, <a href='https://www.penguinrandomhouse.com/books/178420/personality-type-an-owners-manual-by-lenore-thomson/' target='_blank' rel="noreferrer">Personality Types: an Owner's Manual, published by Penguin Random House</a>. The explanations within are much more psychological than the general internet decriptions of types. It breaks down how the types interact in a dynamic way. Thoroughly recommended. 
				</div>

				<hr></hr>
				<Share 
					hostURL={hostURL}
					shareStatement={shareStatement}
				/>
		
		
        </div>
			) : (
				// question view
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption)=> (
        			    <button className='answer-button' onClick={() => handleAnswerButtonClick(answerOption.isCorrect, questions[currentQuestion].category)}>{answerOption.answerText}</button>))}
					</div>
				</>
			)}
		</div>
	);
}