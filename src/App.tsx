import React, { useState } from 'react';

const Chatbot: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleQuestionSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // 질문에 대한 로직을 구현합니다.
    const response = getAnswer(question);
    setAnswer(response);
  };

  const getAnswer = (question: string): string => {
    // 질문에 따른 답변 로직을 작성합니다.
    if (question === '안녕') {
      return '안녕하세요!';
    } else if (question === '날씨') {
      return '오늘은 맑은 날씨입니다.';
    } else {
      return '죄송합니다, 잘 이해하지 못했습니다.';
    }
  };

  return (
    <div>
      <h1>챗봇</h1>
      <form onSubmit={handleQuestionSubmit}>
        <input
          type="text"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
        />
        <button type="submit">질문하기</button>
      </form>
      {answer && <p>답변: {answer}</p>}
    </div>
  );
};

export default Chatbot;
