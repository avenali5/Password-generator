import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { AppContext } from "./Main";

const CheckboxesStyles = styled.div`
  .checkbox {
    margin: 0.3rem 0;
    cursor: pointer;
    user-select: none;
    input {
      display: none;
    }
    label {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    input:checked + label .iconify {
      display: block;
    }
    input:checked + label .fake {
      background: #a4ffaf;
    }
    .fake {
      height: 0.8rem;
      width: 0.8rem;
      border: 2px solid white;
      border-radius: 3px;
      margin-right: 0.7rem;
      transform: translateY(0.1rem);
      position: relative;
      &::before {
        // position: absolute;
        // content: "";
        // left: 0;
        // top: -0.1rem;
        // height: 100%;
        // width: 100%;
        // background: #a4ffaf;
      }
      .iconify {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        display: none;
        path {
          fill: black;
          stroke: black;
        }
      }
    }
  }
`;

function Checkboxes() {
  const { strength, setStrength, chars, setChars } = useContext(AppContext);
  const handleChange = (e) => {
    e.target.checked ? setStrength(strength + 1) : setStrength(strength - 1);
    e.target.checked
      ? setChars(chars + e.target.accept)
      : setChars(chars.replace(e.target.accept, ""));
  };
  return (
    <CheckboxesStyles>
      <div className='checkbox'>
        <input
          type='checkbox'
          name='uppercase'
          id='uppercase'
          accept='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
          onChange={handleChange}
        />
        <label htmlFor='uppercase'>
          <div className='fake'>
            <Icon icon={"ci:check-bold"} />
          </div>
          Include Uppercase Letters
        </label>
      </div>
      <div className='checkbox'>
        <input
          type='checkbox'
          name='lowercase'
          id='lowercase'
          accept='abcdefghijklmnopqrstuvwxyz'
          onChange={handleChange}
        />
        <label htmlFor='lowercase'>
          <div className='fake'>
            <Icon icon={"ci:check-bold"} />
          </div>
          Include Lowercase Letters
        </label>
      </div>
      <div className='checkbox'>
        <input
          type='checkbox'
          name='numbers'
          id='numbers'
          accept='0123456789'
          onChange={handleChange}
        />
        <label htmlFor='numbers'>
          <div className='fake'>
            <Icon icon={"ci:check-bold"} />
          </div>
          Include Numbers
        </label>
      </div>
      <div className='checkbox'>
        <input
          type='checkbox'
          name='symbols'
          id='symbols'
          accept='!@#$%^&*()'
          onChange={handleChange}
        />
        <label htmlFor='symbols'>
          <div className='fake'>
            <Icon icon={"ci:check-bold"} />
          </div>
          Include Symbols
        </label>
      </div>
    </CheckboxesStyles>
  );
}

export default Checkboxes;
