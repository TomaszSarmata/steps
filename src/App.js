import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
    <>
      <Steps />
      <Steps />
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isClosed, setIsClosed] = useState(false);

  const handlePrevious = () => {
    if (step > 1) setStep((curr) => curr - 1);
  };
  const handleNext = () => {
    if (step < 3) setStep((curr) => curr + 1);
  };

  const handleClose = () => {
    setIsClosed((curr) => !curr);
  };

  return (
    <>
      <div
        style={{
          fontSize: '28px',
          fontWeight: 'bold',
          textAlign: 'right',
          marginRight: '20px',
          marginTop: '20px',
        }}
        onClick={handleClose}>
        &times;
      </div>

      {isClosed ? (
        <div
          className="steps"
          style={{ textAlign: 'center' }}>
          Press X to reopen
        </div>
      ) : (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePrevious}>
              previous
            </button>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNext}>
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
