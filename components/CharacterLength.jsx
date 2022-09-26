import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "./Main";

const CharacterLengthStyles = styled.div`
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    h3 {
      margin: 0;
      font-size: 1.3rem;
      color: #a4ffaf;
    }
  }
  input {
    width: 100%;
    accent-color: #a4ffaf;
    outline: none;
    margin-bottom: 1rem;
    cursor: pointer;
  }
`;

function CharacterLength() {
  const { length, setLength } = useContext(AppContext);
  return (
    <CharacterLengthStyles>
      <div className='title'>
        <span>Character Length</span>
        <h3>{length}</h3>
      </div>
      <input
        type='range'
        name='length'
        id='length'
        max={25}
        min={10}
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
    </CharacterLengthStyles>
  );
}

export default CharacterLength;
