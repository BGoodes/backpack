import { EditorState, LexicalEditor } from "lexical";

import { InitialConfigType } from "@lexical/react/LexicalComposer";
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { TRANSFORMERS } from './plugins/markdown-transformers';

import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { CodeNode } from '@lexical/code';
import { ListNode, ListItemNode } from '@lexical/list';
import { LinkNode } from '@lexical/link';

import { theme } from './theme';
import '../style/editor.css';

import NotebookService from '../services/NotebookService';

const Editor = () => {
    
    NotebookService.createNotebook({ title: "test", content: '{"root":{"children":[{"children":[{"text":"Hello World","type":"text","format":"","version":1}],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}' });
    const initialEditorState = NotebookService.getNotebook("test")?.content;

    const nodes = [
        HeadingNode,
        QuoteNode,
        CodeNode,
        ListNode,
        ListItemNode,
        LinkNode
    ];

    const initialConfig: InitialConfigType = {
        editorState: initialEditorState,
        namespace: 'Pen',
        theme,
        nodes,
        onError,
        // editable: false,
    };

    return (
        <LexicalComposer 
            initialConfig={initialConfig}
        >
            <RichTextPlugin
                contentEditable={<ContentEditable/>}
                placeholder={<div>Écrit texte stp</div>}
                ErrorBoundary={LexicalErrorBoundary}
            />
            
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            <HistoryPlugin />   

        </LexicalComposer>
    );
}

const onError = (error: Error, editor: LexicalEditor): void => {
    throw error;
}

export default Editor