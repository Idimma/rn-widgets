import * as React from 'react';
//@ts-ignore
import { WidgetProvider } from '@idimma/rn-widget';
import Welcome from './Welcome';

const App = () => (
  <WidgetProvider>
    <Welcome />
  </WidgetProvider>

);
export default App;
