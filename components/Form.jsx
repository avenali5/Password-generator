import React, { useContext, useState } from "react";
import styled from "styled-components";
import CharacterLength from "./CharacterLength";
import Checkboxes from "./Checkboxes";
import Strength from "./Strength";
import { Icon } from "@iconify/react";
import { AppContext } from "./Main";

const FormStyles = styled.div`
  background: #24232b;
  padding: 1.5rem;
  width: 100%;
  button {
    background: #a4ffaf;
    color: black;
    border: none;
    outline: none;
    width: 100%;
    cursor: pointer;
    padding: 0.7rem;
    font-weight: bold;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .filler {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 0%;
      filter: brightness(0.1);
      transition: 0.3s all;
      background: #a4ffaf50;
      opacity: 0;
    }
    &.inactive {
      opacity: 0.4;
      pointer-events: none;
    }
    .iconify {
      font-size: 17px;
      margin-left: 0.7rem;
    }
  }
  @keyframes fill {
    to {
      opacity: 1;
      width: 100%;
    }
  }
`;

function Form() {
  const { strength, length, setFinalPassword, chars } = useContext(AppContext);
  const [filler, setFiller] = useState(false);

  const createPassword = () => {
    setFinalPassword("");
    setFiller(true);
    setTimeout(() => {
      let password = Array.apply(0, Array(length))
        .map(function () {
          return (function (charset) {
            return charset.charAt(Math.floor(Math.random() * charset.length));
          })(chars);
        })
        .join("");
      setFinalPassword(password);
      setFiller(false);
    }, 800);
  };
  return (
    <FormStyles>
      <CharacterLength />
      <Checkboxes />
      <Strength />
      <button
        onClick={createPassword}
        className={`${strength <= 1 ? "inactive" : ""}`}
      >
        <div
          className='filler'
          style={{ animation: filler ? "fill 0.8s" : "none" }}
        ></div>
        {filler ? (
          <span>Generating</span>
        ) : (
          <div>
            GENERATE <Icon icon={"akar-icons:arrow-right"} />{" "}
          </div>
        )}
      </button>
    </FormStyles>
  );
}

export default Form;
