// React
import React from 'react';

// Components
import TextBlock from '../text-block.component';

// Styles
import '../text-block.styles.scss';

export default {
  title: 'Molecules/TextBlock',
  component: TextBlock,
};

const Template = (args) => <TextBlock {...args}/>;

export const Default = Template.bind({});
Default.args = {};

// export const Test = Template.bind({});
// Test.args = data;

