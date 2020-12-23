import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
	<SpeechProvider appId="b2ed5c89-0bcc-4890-8876-92b18ab28049" language="en-US">
		<Provider>
			<App />
		</Provider>
	</SpeechProvider>,
	document.getElementById('root')
);
