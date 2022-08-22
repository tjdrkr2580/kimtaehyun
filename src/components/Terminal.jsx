import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import "./style/terminal.css";

const Terminal = ({ terminal, setTe, gallery, music, setGa, setMu }) => {
  const [output, setOutput] = useState([]);
  const [type, setType] = useState("");
  let newOutput = "";
  const inputRef = useRef();
  const onChange = (e) => {
    setType(e.target.value);
  };
  const wrapperClick = () => {
    inputRef.current.focus();
  };
  return (
    <Draggable positionOffset={{ x: "-50%", y: "-50%" }}>
      <section className="terminal-wrapper" onClick={wrapperClick}>
        <ul className="terminal-line">
          <li>터미널</li>
          <li>
            <ul className="terminal-btn">
              <li
                onClick={() => {
                  setTe(!terminal);
                }}
                style={{ color: "#63cb4e" }}
              >
                ●
              </li>
              <li style={{ color: "#f4c04e" }}>●</li>
              <li
                onClick={() => {
                  setTe(!terminal);
                }}
                style={{ color: "#ec6a5f " }}
              >
                ●
              </li>
            </ul>
          </li>
        </ul>
        <section className="terminal-type">
          <p>
            TaeH [version 1.0.0]
            <br />
            (c) KimTaeHyun. tous droits réservés
            <br />
            You can check the commands available in taeH through the "help"
            command.
          </p>
          {output}
          <div className="type-wrapper">
            C:\Users\taeh&gt;
            <input
              ref={inputRef}
              type="text"
              value={type}
              onChange={onChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (e.target.value !== "") {
                    newOutput = output + "\n" + "C:Users\taeh>" + type + "\n";
                    switch (type) {
                      case "help":
                        newOutput += "pwd, cd /gallery, cd /music, exit";
                        setType("");
                        break;
                      case "pwd":
                        newOutput += "C:\\Users\\taeh";
                        setType("");
                        break;
                      case "exit":
                        setTe(!terminal);
                        break;
                      case "cd /gallery":
                        setTe(!terminal);
                        setGa(!gallery);
                        break;
                      case "cd /music":
                        setTe(!terminal);
                        setMu(!music);
                        break;
                      default:
                        setType("");
                        newOutput +=
                          'Failed (remote: unknown commant) please type "help" command';
                        break;
                    }
                    setOutput(newOutput);
                  }
                }
              }}
              autoFocus
            />
          </div>
        </section>
      </section>
    </Draggable>
  );
};

export default Terminal;
