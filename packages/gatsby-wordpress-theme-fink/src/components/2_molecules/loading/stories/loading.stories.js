// React
import React from 'react';

// Components
import Loading from '../loading.component';

// Styles
import '!style-loader!css-loader!sass-loader!../loading.styles.scss';

export default {
  title: 'Elements/Loading',
  component: Loading,
};

const Template = (args) => <Loading {...args}/>;

export const Default = Template.bind({});
Default.args = {
  projectDetailImage: {
    // altText: "",
    // image:
    //   {
    //     backgroundColor: "#687858",
    //     height: 671,
    //     fallback: {
    //       src: "/static/d7df89d975090bc927671d5b9c46458e/ce7b0/image-5.png",
    //       srcSet: "/static/d7df89d975090bc927671d5b9c46458e/36e4e/image-5.png 300w,/static/d7df89d975090bc927671d5b9c46458e/aecf3/image-5.png 601w,/static/d7df89d975090bc927671d5b9c46458e/ce7b0/image-5.png 1201w",
    //       sizes: "(min-width: 1201px) 1201px, 100vw"
    //     },
    //     layout: "constrained",
    //     width: 1198
    //   }
  }
};

// export const Test = Template.bind({});
// Test.args = data;

