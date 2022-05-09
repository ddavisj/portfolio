import React from 'react';
import { MDXProvider } from '@mdx-js/react';

function CustomMDX({ children }) {
  return (
    <MDXProvider
      components={{
        h2: (props) => (
          <>
            <span className="icon fa-code" />
            <h3 {...props} className="mdx-h3" />
          </>
        ),
        a: (props) => (
          <>
            <a {...props} target="_blank" rel="noreferrer" />
          </>
        ),
      }}
    >
      {children}
    </MDXProvider>
  );
}

export default CustomMDX;
