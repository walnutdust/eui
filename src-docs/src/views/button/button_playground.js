import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import { EuiButton } from '../../../../src/components/';

const defaultCode = `
<EuiButton
  iconSide="left"
  color="primary"
  size="m"
  fill={false}
  type="button">
  Button Text
</EuiButton>
`;

export default () => (
  <div>
    <LiveProvider code={defaultCode} scope={{ EuiButton }}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  </div>
);
