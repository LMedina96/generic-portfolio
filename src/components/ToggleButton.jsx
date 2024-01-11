import "@theme-toggles/react/css/Classic.css"
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../App';
import { Classic } from "@theme-toggles/react"

const StyledClassic = styled(Classic)`
  width: 64px;
  border: none;
  cursor: pointer;
  font-size: 38px;
  margin: 10px;
  background-color: transparent;
  color: yellow;
`;

const ToggleButton = () => {
    const { toggleTheme } = useContext(ThemeContext);
    const [isToggled, setToggle] = useState(true)

    return (
        <StyledClassic
            duration={750}
            toggled={isToggled}
            className='toggleTheme'
            onClick={() => {
                toggleTheme();
                setToggle(!isToggled)
            }}
        />
    )
};

export default ToggleButton;