import {useState} from 'react';
import '../styles/toggleStyle.css'

export const Example = () => {

  return (
    <Toggle
      leftLabel="Left label"
      rightLabel="Right label"
      handleToggle={() => {}}
    />
  )
}

export const Toggle = ({leftLabel, rightLabel, handleToggle = () => {}}) => {
Toggle
  const [on, setOn] = useState(false);

  const toggle = () => {
    handleToggle(!on);
    setOn(!on);
  }

  const labelId = 'label-' + Math.floor(Math.random() * 9999);

  return (
    <div className="cc-toggle-container justify-content-end text-align-center my-2">
      <span className="cc-toggle-label" id={labelId+'1'}>{leftLabel}</span>
        <div
          className={`cc-toggle${on ? ' cc-toggle-on' : ''}`}
          tabIndex="0"
          role="switch"
          aria-checked={on}
          aria-labelledby={labelId + '1 ' + labelId+'2'}
          onClick={() => toggle()}
          onKeyDown={(e) => {
            if (e.key === 'Enter') toggle();
          }}
        >
          <div className="cc-toggle-indicator"></div>
        </div>
      <span className="cc-toggle-label" id={labelId+'2'}>{rightLabel}</span>
    </div>
  )
}