import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import {Cursor} from 'react-simple-typewriter';
const TypeWriter = () => {
  const [text] = useTypewriter({
    words: ['Software Engineer', 'Web Developer', 'Designer', 'Videographer'],
    loop: 0
  });

  return (
    <div className='App'>
      <span>{text}<Cursor cursorStyle='<'/></span>
    </div>
  )
};

export default TypeWriter;

