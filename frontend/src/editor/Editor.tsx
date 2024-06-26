import {InitialConfigType, LexicalComposer} from "@lexical/react/LexicalComposer";
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin'
import {ContentEditable} from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin'
import {MarkdownShortcutPlugin} from '@lexical/react/LexicalMarkdownShortcutPlugin';
import {TRANSFORMERS} from './plugins/markdown-transformers';
import {HeadingNode, QuoteNode} from '@lexical/rich-text';
import {CodeNode} from '@lexical/code';
import {ListItemNode, ListNode} from '@lexical/list';
import {LinkNode} from '@lexical/link';

import {theme} from './theme';
import '../style/editor.css';
import Page from "../interface/page.ts";

const Editor = (page: Page) => {

    const nodes = [
        HeadingNode,
        QuoteNode,
        CodeNode,
        ListNode,
        ListItemNode,
        LinkNode
    ];

    const initialConfig: InitialConfigType = {
        editorState: page.content,
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

const onError = (error: Error): void => {
    throw error;
}

export default Editor