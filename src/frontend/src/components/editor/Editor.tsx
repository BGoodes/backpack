// import 'Editor.css';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';

import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
// import katex from 'katex';
import katex from 'katex';
import 'katex/dist/katex.min.css';

import React, { useState } from 'react';
// Editor config
const editorConfig = {
  namespace: 'my-editor',
  theme: {
    // Customize theme if needed
  },
  onError(error: Error) {
    console.error(error);
  },
};
// Insert equation handler
const myInsertEquation = (setRenderedEquation: React.Dispatch<React.SetStateAction<string>>) => {
  const equationElement = document.querySelector('.my-editor-contenteditable')?.textContent; // Use textContent to get only the raw text
  if (equationElement) {
    const renderedEquation = katex.renderToString(equationElement, {
      throwOnError: false,
    });
    setRenderedEquation(renderedEquation);
  }
};

// Editor component
function Editor() {
  const [renderedEquation, setRenderedEquation] = useState<string>('');

  return (
    <div>
      <LexicalComposer initialConfig={editorConfig}>
        <RichTextPlugin
          contentEditable={<ContentEditable className="my-editor-contenteditable" />}
          placeholder={<div>Écrivez ici...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <button onClick={() => myInsertEquation(setRenderedEquation)}>Insérer une équation</button>
      </LexicalComposer>
      <div dangerouslySetInnerHTML={{ __html: renderedEquation }}></div>
    </div>
  );
}

export default Editor;