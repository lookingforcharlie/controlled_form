import { useState } from 'react';
import './App.css';

const initialFormData = {
  firstName: 'abc',
  lastName: 'asdf',
  password: 'qaz',
  age: 20,
  favoriteColor: 'blue',
  height: '6.7',
  weight: '120 pounds',
  race: 'asian',
  birthDate: 'April 1, 2000',
  shirtSize: '7',
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
  e: 'e',
  f: 'f',
  g: 'g',
  h: 'h',
  i: 'i',
  j: 'j',
  k: 'k',
  l: 'l',
  m: 'm',
  n: 'n',
  o: 'o',
  p: 'p',
  q: 'q',
};

// Extract all the value of the keys from object initialFormData, and put them into an array
const keys = Object.keys(initialFormData);

const ControlledForm = () => {
  const [form, setForm] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleInputChanged = (key, value) => {
    setErrors({
      ...errors,
      [key]: value === '',
      // 'value === ""' returns a boolean
      // key value equals to true, border color will be red, and will show up the error message
      // Key value equals to false, no border color.
    });
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleReset = () => {
    setErrors({});
    setForm(initialFormData);
  };

  return (
    <>
      <div className='grid'>
        {/* key value will be the label name of each input */}
        {keys.map((key) => (
          <div className='form-group' key={crypto.randomUUID()}>
            <label htmlFor='mess-form'>{key}</label>
            <input
              id='mess-form'
              key={key}
              value={form[key]}
              style={{ borderColor: errors[key] ? 'red' : '' }}
              className='form-control'
              onChange={(e) => handleInputChanged(key, e.target.value)}
            ></input>
            {errors[key] && <span className='form-text'>errors</span>}
          </div>
        ))}
      </div>
      <button onClick={handleReset} className='reset-btn'>
        Reset Form
      </button>
    </>
  );
};

function App() {
  return (
    <div className='App'>
      <h2>Controlled Form</h2>
      <ControlledForm />
    </div>
  );
}

export default App;
