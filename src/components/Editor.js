import React from 'react';
import { marked } from 'marked';

class Editor extends React.Component {
  state = {
    content: '',
    markdown: 'Preview',
  };

  handleChange(event) {
    this.setState({
      content: event.target.value,
      markdown: marked.parse(event.target.value, {
        breaks: true,
      }),
    });
  }

  render() {
    this.handleChange = this.handleChange.bind(this);
    return (
      <div className="editor-wrapper">
        <div>
          <textarea
            id="editor"
            placeholder="Markdown"
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: this.state.markdown }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Editor;
