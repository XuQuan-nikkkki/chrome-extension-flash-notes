import React from 'react';
import '../styles/TextEditor.css';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="text-editor">
        <div id="editor">
          <ReactQuill
            placeholder="Click the microphone and speak out your thought, let the editor do the rest."
            value={this.props.editorContent}
            onChange={this.props.changeEditorContent}
          />
        </div>
      </div>
    );
  }
}

export default TextEditor;
