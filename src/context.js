import React from 'react';

export const Context = React.createContext({
	visible: 'about',
	up: (value) => {},
	posts: []
});
