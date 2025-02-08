import React from 'react';

const CodeDisplay = () => {
  return (
    <div>
      <style>
        {`
          pre {
            white-space: pre;
            display: block;
            background-color: black;
            padding: 10px;
            border-radius: 8px;
            overflow: auto; /* Enable both horizontal and vertical scrolling */
            max-height: 500px; /* Set a maximum height for vertical scrolling */
          }
        `}
      </style>

      <pre>
        <code>
          {`
            .profile {
              width: 30px;
              height: 30px;
            }

            .bell-icon {
              font-size: 20px;
            }
          `}
        </code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
