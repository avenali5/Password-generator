import { Icon } from "@iconify/react";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "./Main";

const FinalPasswordStyles = styled.div`
  background: #24232b;
  padding: 1.5rem;
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    background: none;
    color: black;
    border: none;
    outline: none;
    width: 100%;
    pointer-events: none;
    font-size: 1rem;
    padding: 0;
    font-weight: bold;
    color: white;
  }
  .iconify {
    font-size: 30px;
    cursor: pointer;
    path {
      stroke: #a4ffaf;
    }
  }
  .copied {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    span {
      font-size: 0.7rem;
      color: #a4ffaf;
      position: absolute;
      top: 0;
      transform: translateY(-100%);
    }
  }
  .inactive {
    opacity: 0.3;
    pointer-events: none;
  }
`;

function FinalPassword() {
  const { finalPassword } = useContext(AppContext);
  const [copied, setCopied] = useState(false);
  return (
    <FinalPasswordStyles>
      <input
        type='text'
        className='input'
        readOnly
        placeholder='P4$5W0rD!'
        value={finalPassword}
      />
      {/* {finalPassword && ( */}
      <div
        onClick={() => {
          navigator.clipboard.writeText(finalPassword);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1500);
        }}
      >
        {copied ? (
          <div className='copied'>
            <span>Copied!</span>
            <Icon icon={"ci:check-bold"} style={{ pointerEvents: "none" }} />
          </div>
        ) : (
          <Icon
            icon={"akar-icons:copy"}
            className={`${!finalPassword && "inactive"}`}
          />
        )}
      </div>
      {/* )} */}
    </FinalPasswordStyles>
  );
}

export default FinalPassword;
