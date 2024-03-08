import { useState } from "react";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="output-wrapper">
      <div className="menu-list">
        <p className="menu-item">Output</p>
      </div>
      <button disabled={isLoading} onClick={runCode} className="run-button">
        {isLoading ? "Loading..." : "Run Code"}
      </button>
      <div
        style={{
          color: isError ? "red" : "",
          borderColor: isError ? "red" : "#1d1d1d",
        }}
        className="output-container"
      >
        {output
          ? output.map((line, i) => <p key={i}>{line}</p>)
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};

export default Output;
