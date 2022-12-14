import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
// import "codemirror/keymap/sublime";
import { sublime } from '@uiw/codemirror-theme-sublime';
import CodeEditor from '@uiw/react-textarea-code-editor';



export default function Editor(props) {
   // const extensions = [javascript({ jsx: true })];
    const {
        value,
        onChange
    } = props;
    function handleChange(e) {
        onChange(e.target.value);    
    }
    return (
    <div className="editor-container">
        <CodeEditor
            value={value}
            language="js"
            placeholder="Please enter JS code."
            onChange={handleChange}
            padding={15}
            style={{
                fontSize: 15,
                backgroundColor: "#f5f5f5",
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}

    />
    </div>

  )
}
