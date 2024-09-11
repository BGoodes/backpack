import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';

import { DEFAULT_TRANSFORMERS, MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';

import { PenTheme } from './themes';
import nodes from './nodes';
import './Editor.css'

const onError = (error: Error) => {
  console.error(error);
};

const Editor = () => {
  const initialConfig = {
    namespace: 'Pen',
    theme: PenTheme,
    onError,
    editorState: null,
    nodes
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="pen-container">
        <RichTextPlugin
          contentEditable={<ContentEditable className="pen-input" />}
          placeholder={<div className="pen-placeholder">Commencez à écrire...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <MarkdownShortcutPlugin transformers={DEFAULT_TRANSFORMERS}/>
      </div>
    </LexicalComposer>
  );
};

export default Editor;