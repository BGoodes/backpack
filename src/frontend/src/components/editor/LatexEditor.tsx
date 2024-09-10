import React, { useState } from 'react';
import { LexicalComposer, InitialConfigType } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { EditorState, $getRoot } from 'lexical';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

const LaTeXEditor: React.FC = () => {
  const [content, setContent] = useState<string>('');

  const renderLatex = (plainText: string): string => {
    return plainText
      // Gérer les blocs LaTeX délimités par __
      .replace(/__([\s\S]+?)__/g, (_, latexCode) => {
        try {
          return katex.renderToString(latexCode, { throwOnError: false, displayMode: true });
        } catch (err) {
          return `<span style="color:red;">Invalid LaTeX</span>`;
        }
      })
      // Gérer les lignes LaTeX qui commencent par \
      .replace(/^\\(.+)$/gm, (_, latexCode) => {
        try {
          return katex.renderToString(latexCode, { throwOnError: false, displayMode: false });
        } catch (err) {
          return `<span style="color:red;">Invalid LaTeX</span>`;
        }
      });
  };

  const onChange = (editorState: EditorState): void => {
    editorState.read(() => {
      const plainText = $getRoot().getTextContent();
      setContent(plainText);
    });
  };

  const compileLatex = (): void => {
    const rendered = renderLatex(content);
    const outputElement = document.getElementById('latex-output');
    if (outputElement) {
      outputElement.innerHTML = rendered;
    }
  };

  const editorConfig: InitialConfigType = {
    namespace: 'LatexEditor',
    theme: {},
    onError: (error: Error) => console.error(error),
  };

  return (
    <div>
      <LexicalComposer initialConfig={editorConfig}>
        <RichTextPlugin
                  contentEditable={<ContentEditable />}
                  placeholder={<div>Type your LaTeX equations...</div>} ErrorBoundary={LexicalErrorBoundary}        />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
      </LexicalComposer>

      <button onClick={compileLatex}>Compile LaTeX</button>

      <div id="latex-output" style={{ marginTop: '20px', border: '1px solid #ddd', padding: '10px' }} />
    </div>
  );
};

export default LaTeXEditor;
