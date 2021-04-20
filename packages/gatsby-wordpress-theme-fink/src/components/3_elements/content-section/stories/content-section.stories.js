import React from 'react';

// import { Header } from '../../../../stories/Header';
// import TestTwo from '../../../test2.component';
import data from './content-section-data'
import ContentSection from '../content-section.component';

export default {
  title: 'Elements/Content Section',
  component: ContentSection,
};

const Template = (args) => <ContentSection {...args}/>;

export const Default = Template.bind({});
Default.args = data;

export const Test = Template.bind({});
Test.args = data;

