import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { createMemoryHistory, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';