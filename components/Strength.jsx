import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "./Main";

const StrengthStyles = styled.div`
  background: #18151f;
  padding: 1rem;
  margin: 1rem 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > span {
    font-size: 0.8rem;
    opacity: 0.8;
  }
  .bars {
    display: flex;
    align-items: center;
    span {
      margin-right: 0.4rem;
    }
    .bar {
      height: 2rem;
      width: 0.7rem;
      margin-left: 0.3rem;
      border: 2px solid white;
      &.filled {
      }
    }
  }
`;

function Strength() {
  const {
    strengthText,
    setStrengthText,
    strength,
    setStrengthColor,
    strengthColor,
    bars,
  } = useContext(AppContext);

  useEffect(() => {
    switch (strength) {
      case 1:
        setStrengthText("---");
        setStrengthColor("#F13232");
        break;
      case 2:
        setStrengthText("WEAK");
        setStrengthColor("#F13232");
        break;
      case 3:
        setStrengthText("MEDIUM");
        setStrengthColor("#DF7D46");

        break;
      case 4:
        setStrengthText("STRONG");
        setStrengthColor("#DCDF46");
        break;
      case 5:
        setStrengthText("SUPA STRONG");
        setStrengthColor("#46DF59");
        break;
      default:
        break;
    }
  }, [strength]);

  return (
    <StrengthStyles>
      <span>STRENGTH</span>
      <div className='bars'>
        <span className='strength'>{strengthText}</span>
        {bars.map((bar) => (
          <div
            key={bar.id}
            className='bar'
            style={{
              background: bar.strength <= strength ? strengthColor : "none",
            }}
          ></div>
        ))}

        {/* <div
          className='bar filled'
          // style={{ background: bar.filled ? strengthColor : "none" }}
        ></div>
        <div
          className={`${} bar`}
          // style={{ background: bar.filled ? strengthColor : "none" }}
        ></div>
        <div
          className='bar'
          // style={{ background: bar.filled ? strengthColor : "none" }}
        ></div>
        <div
          className='bar'
          // style={{ background: bar.filled ? strengthColor : "none" }}
        ></div> */}
      </div>
    </StrengthStyles>
  );
}

export default Strength;
