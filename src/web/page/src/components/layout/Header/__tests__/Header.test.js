import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import { store } from '../../../../store';

describe('Header Component', () => {
  const renderHeader = () => {
    return render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
  };

  test('renders logo and navigation items', () => {
    renderHeader();
    expect(screen.getByAltText(/netspinup logo/i)).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/blog/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  test('handles mobile menu toggle', () => {
    renderHeader();
    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);
    expect(screen.getByRole('navigation')).toHaveClass('mobile-menu-open');
  });
}); 