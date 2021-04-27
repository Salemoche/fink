// React
import React from 'react';

// Components
import Default from '../overview-project.component';

// Styles
import '../overview-project.styles.scss';

export default {
  title: 'Elements/Overview Project',
  component: OverviewProject,
};

const Template = (args) => <OverviewProject {...args}/>;

export const Standard = Template.bind({});
Standard.args = {};

// export const Test = Template.bind({});
// Test.args = data;

