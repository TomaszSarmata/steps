import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isClosed, setIsClosed] = useState(false);

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };
  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleClose = () => {
    setIsClosed(!isClosed);
  };

  return (
    <>
      <div
        style={{
          fontSize: '16px',
          fontWeight: 'bold',
          textAlign: 'right',
          marginRight: '20px',
          marginTop: '20px',
        }}
        onClick={handleClose}>
        X
      </div>

      {isClosed ? (
        <div
          className="steps"
          style={{ textAlign: 'center' }}>
          Press X to reopen
        </div>
      ) : (
        <div className="steps">
          <div class="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p class="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div class="buttons">
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
