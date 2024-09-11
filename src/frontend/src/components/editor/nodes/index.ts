import type {Klass, LexicalNode} from 'lexical';

import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { CodeNode, CodeHighlightNode } from '@lexical/code';
import { ListNode, ListItemNode } from '@lexical/list';
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode';
import { AutoLinkNode, LinkNode } from '@lexical/link';

const nodes : Array<Klass<LexicalNode>>= [
    // Lexical default nodes
    HeadingNode,
    QuoteNode,
    ListNode,
    ListItemNode,
    CodeNode,
    CodeHighlightNode,
    HorizontalRuleNode,
    AutoLinkNode,
    LinkNode

    // Custom nodes
    // TODO
];

export default nodes;