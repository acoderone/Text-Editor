import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "../styles/styles.css";

export const Editor = () => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = (value) => {
    setState({ value });
  };
  return (
    <div className="text-editor">
      <EditorToolbar className="top" />
      <ReactQuill
        className="bottom"
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
