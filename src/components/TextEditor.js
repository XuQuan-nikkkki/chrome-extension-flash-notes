import React from 'react';
import '../styles/TextEditor.css';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mountedEditor: false
    };
    this.quillRef = null;
    this.reactQuillRef = null;
    this.attachQuillRefs = this.attachQuillRefs.bind(this);
  }
  componentDidMount() {
    this.attachQuillRefs();
  }

  componentDidUpdate() {
    this.attachQuillRefs();
  }

  attachQuillRefs = () => {
    if (typeof this.reactQuillRef.getEditor !== 'function') return;
    const quillRef = this.reactQuillRef.getEditor();
    if (quillRef != null) this.quillRef = quillRef;
  };

  insertText = content => {
    const editor = this.reactQuillRef.getEditor();
    let newContent = content + ' ';
    editor.focus();
    var range = this.quillRef.getSelection();
    let position = range ? range.index : this.props.editorContent.length;
    this.quillRef.insertText(position, newContent);
    this.props.resetTranscript();
  };

  render() {
    return (
      <div className="text-editor">
        <div id="editor">
          <ReactQuill
            ref={el => {
              this.reactQuillRef = el;
            }}
            placeholder="Click the microphone and speak out your thought, let the editor do the rest."
            value={this.props.editorContent}
            onChange={this.props.changeEditorContent}
          />
          {this.props.finalTranscript &&
            this.insertText(this.props.finalTranscript)}
        </div>
      </div>
    );
  }
}

export default TextEditor;
