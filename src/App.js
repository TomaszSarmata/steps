import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if (step >= 2) {
      setStep(step - 1);
    } else {
      setStep(3);
    }
  };
  const handleNext = () => {
    if (step <= 2) {
      setStep(step + 1);
    } else {
      setStep(1);
    }
  };

  return (
    <div className="steps">
      <div class="numbers">
        <div className={`${step === 1 ? 'active' : ''}`}>1</div>
        <div className={`${step === 2 ? 'active' : ''}`}>2</div>
        <div className={`${step === 3 ? 'active' : ''}`}>3</div>
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
  );
}
