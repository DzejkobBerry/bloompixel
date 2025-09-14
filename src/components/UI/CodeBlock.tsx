import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
interface CodeBlockProps {
  code: string;
  language: string;
}
const CodeBlock = ({
  code,
  language
}: CodeBlockProps) => {
  return <SyntaxHighlighter language={language} style={atomDark} customStyle={{
    backgroundColor: "transparent",
    padding: "0",
    margin: "0",
    borderRadius: "6px",
    fontSize: "12px",
    fontFamily: '"Space Mono", monospace'
  }}>
      {code.trim()}
    </SyntaxHighlighter>;
};
export default CodeBlock;