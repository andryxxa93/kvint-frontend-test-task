import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import SwitchComponent from '../src/components/TestComponent';

export default {
  title: 'UI',
  decorators: [
    withKnobs,
    (storyFn: () => React.ReactNode): React.ReactNode => storyFn(),
  ],
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Switch = () => {
  return <SwitchComponent />;
};

Switch.story = {
  name: 'Switch',
};
