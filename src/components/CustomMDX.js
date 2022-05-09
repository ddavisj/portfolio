import React from 'react';
import { MDXProvider } from '@mdx-js/react';

function CustomMDX({ children }) {
  return (
    <MDXProvider
      components={{
        h2: (props) => (
          <>
            <span className="icon fa-code" />
            <h2 {...props} className="mdx-h2" />
          </>
        ),
      }}
    >
      {children}
    </MDXProvider>
  );
}

export default CustomMDX;
