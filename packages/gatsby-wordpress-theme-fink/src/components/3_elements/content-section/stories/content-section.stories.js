import React from 'react';

// import { Header } from '../../../../stories/Header';
// import TestTwo from '../../../test2.component';
import data from './content-section-data'
import TestTwo from '../content-section.component';

console.warn(data);

export default {
  title: 'Components/5asdf_Elements',
  component: ContentSection,
};

export const ContentSection = (args) => <TestTwo content={data}/>;

// import React from 'react';

// // import { Header } from '../../../../stories/Header';
// // import TestTwo from '../../../test2.component';
// import TestTwo from '../content-section.component';
// import data from './content-section-data';

// export default {
//   title: 'Components/5asdf_Elements',
//   component: ContentSection,
// };

// export const ContentSection = (args) => <TestTwo content={data}/>;

