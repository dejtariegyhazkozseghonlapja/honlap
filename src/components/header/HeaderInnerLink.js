import { React, useState } from "react";
import { Link } from "react-router-dom";
import './HeaderInnerLink.css';

function HeaderInnerLink(props) {
  const [text, setText] = useState(props.text);
  const [url, setUrl] = useState(props.url);

  function handleClick() {
    return url
  }

  return (
    <Link to={handleClick} className='LinkWrapper'>
      <p>{text}</p>
    </Link>
  )
}

export default HeaderInnerLink;