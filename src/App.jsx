import { useState } from "react";
import editIcon from "./assets/edit.svg";
import visibilityIcon from "./assets/visibility.svg";
import Card from "./Card";
import "./App.css";
import EXAMPLE from "./constants";
import Markdown from "react-markdown";

function App() {
  const [text, setText] = useState(EXAMPLE);

  const onHandleChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>MARKDOWN PREVIEWER</h1>
      <div className='layout'>
        <Card icon={editIcon} title='Edit'>
          <textarea
            id='editor'
            name='editor'
            title='Editor'
            className='w-full h-full p-4'
            onChange={onHandleChange}
            value={text}
          />
        </Card>

        <Card icon={visibilityIcon} title='Preview'>
          <div id='preview' className='w-full bg-slate-700 flex justify-center'>
            <Markdown>{text}</Markdown>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
