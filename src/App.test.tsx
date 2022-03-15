import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import Books from 'pages/books';

test('renders learn react link', () => {
    render(
        <Provider store={store}>
            <Books />
        </Provider>
    );
    const linkElement = screen.getByText('Books');
    expect(linkElement).toBeInTheDocument();
});
