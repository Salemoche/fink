// React
import React from 'react';

// Components
import Default from '../home-project.component';

// Styles
import '../home-project.styles.scss';

export default {
  title: 'Elements/Home Project',
  component: HomeProject,
};

const Template = (args) => <HomeProject {...args}/>;

export const Standard = Template.bind({});
Standard.args = {};

// export const Test = Template.bind({});
// Test.args = data;

