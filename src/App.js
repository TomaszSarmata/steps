const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  const step = 1;

  return (
    <div className="steps">
      <div class="numbers">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <p class="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div class="buttons">
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }}>
          previous
        </button>
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }}>
          next
        </button>
      </div>
    </div>
  );
}
