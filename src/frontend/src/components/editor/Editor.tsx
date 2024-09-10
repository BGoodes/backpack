import 'Editor.css';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { EquationPlugin } from '@lexical/plugin-equation'; // L'import du plugin des équations, si disponible

const editorConfig = {
    // Configuration de l'éditeur Lexical
    theme: {
      // Thème personnalisé
    },
    onError(error) {
      console.error(error);
    },
  };
  
  function Editor() {
    return (
      <LexicalComposer initialConfig={editorConfig}>
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<div>Écrivez ici...</div>}
        />
        <HistoryPlugin />
        <EquationPlugin /> {/* Activer le plugin des équations ici */}
      </LexicalComposer>
    );
}

export default Editor;





