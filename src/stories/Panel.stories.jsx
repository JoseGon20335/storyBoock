import React from 'react';
import '../App.css';
import App from '../App';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'App',
  component: App
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const App1 = () => <App/>;
