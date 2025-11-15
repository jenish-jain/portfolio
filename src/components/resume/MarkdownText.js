import React from 'react';

/**
 * Simple component to render text with markdown bold (**text**)
 * while preserving all formatting
 */
export const MarkdownText = ({ text }) => {
  // Split by **bold** markers
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          // Bold text
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
};
