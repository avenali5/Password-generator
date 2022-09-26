import React, { createContext, useState } from "react";
import styled from "styled-components";
import FinalPassword from "./FinalPassword";
import Form from "./Form";
export const AppContext = createContext();

const MainStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 23rem;
  user-select: none;
`;

function Main() {
  const [strengthText, setStrengthText] = useState("---");
  const [bars, setBars] = useState([
    {
      id: 1,
      filled: strengthText === "SUPA WEAK",
      color: "#F13232",
      strength: 2,
    },
    {
      id: 2,
      filled: strengthText === "MEDIUM",
      color: "#DF7D46",
      strength: 3,
    },
    {
      id: 3,
      filled: strengthText === "STRONG",
      color: "#DCDF46",
      strength: 4,
    },
    {
      id: 4,
      filled: strengthText === "SUPA STRONG",
      color: "#46DF59",
      strength: 5,
    },
  ]);
  const [strength, setStrength] = useState(1);
  const [strengthColor, setStrengthColor] = useState("#F13232");
  const [length, setLength] = useState(15);
  const [chars, setChars] = useState("");
  const [finalPassword, setFinalPassword] = useState("");

  return (
    <AppContext.Provider
      value={{
        bars,
        setBars,
        strength,
        setStrength,
        strengthColor,
        setStrengthColor,
        strengthText,
        setStrengthText,
        length,
        setLength,
        chars,
        setChars,
        finalPassword,
        setFinalPassword,
      }}
    >
      <MainStyle>
        <FinalPassword />
        <Form />
      </MainStyle>
    </AppContext.Provider>
  );
}

export default Main;
