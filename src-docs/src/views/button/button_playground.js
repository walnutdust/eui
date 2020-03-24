import React from 'react';

import Playground from '../playground';

const sampleCode = `<EuiButton
iconSide="left"
color="primary"
size="m"
fill={false}
type="button">
Button Text
</EuiButton>
`;

import { EuiButton } from '../../../../src/components';

export default (docInfo = null) => {
  return (
    <Playground
      value={sampleCode}
      autoComplete={docInfo}
      scope={{ EuiButton }}
    />
  );
};
