import { React, useState } from "react";
import './HeaderButton.css';

function HeaderButton(props) {
  const [text, setText] = useState(props.text);
  const [url, setUrl] = useState(props.url);

  function handleClick() {
    window.location.href = url;
  }
  return (
      <div className='headerButtonWrapper'>
        <p onClick={handleClick}>{text}</p>
      </div>
  )
}

export default HeaderButton;