import React, { FC } from 'react';
import './InputField.css';

interface InputFieldProps {}

const InputField: FC<InputFieldProps> = () => (
  <form className='input'>
    <input className='input_box' type="input" placeholder='Enter a task!' />
    <button className='input_submit' type='submit'>Go</button>
  </form>
);

export default InputField;
