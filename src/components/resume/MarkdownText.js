import { Fragment } from 'react';

export const MarkdownText = ({ text }) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith('**') && part.endsWith('**')
          ? <strong key={index}>{part.slice(2, -2)}</strong>
          : <Fragment key={index}>{part}</Fragment>
      )}
    </>
  );
};
