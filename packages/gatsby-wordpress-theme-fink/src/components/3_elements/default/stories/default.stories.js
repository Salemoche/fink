// React
import React from 'react';

// Components
import Default from '../default.component';

// Styles
import '../default.styles.scss';

export default {
  title: 'Elements/Default',
  component: Default,
};

const Template = (args) => <Default {...args}/>;

export const Standard = Template.bind({});
Standard.args = {};

// export const Test = Template.bind({});
// Test.args = data;

