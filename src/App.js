import React, { PureComponent } from "react";
import DanteEditor from "Dante2";
import { convertFromRaw } from "draft-js";

const style = {
  width: "50%",
  display: "inline-block",
  overflow: "auto",
  verticalAlign: "top"
};

class App extends PureComponent {
  state = {
    content: ""
  };

  focus = () => true;

  save = (editorContext, content) => this.setState({ content });

  render() {
    const { content } = this.state;

    let danteProps = {
      data_storage: {
        url: "localhost:3000/",
        save_handler: this.save
      }
    };

    let contentState = {};

    try {
      contentState = convertFromRaw(content);
    } catch (e) {}

    return (
      <div style={{ marginLeft: 200 }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <DanteEditor {...danteProps} />

        <hr />
        <div style={style}>
          <p>Raw State</p>
          <pre>{JSON.stringify(content, null, 2)}</pre>
        </div>
        <div style={style}>
          <p>Content State</p>
          <pre>{JSON.stringify(contentState, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

export default App;
