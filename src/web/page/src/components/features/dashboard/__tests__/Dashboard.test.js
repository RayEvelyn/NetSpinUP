import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Dashboard from '../Dashboard';
import { store } from '../../../../store';

describe('Dashboard Component', () => {
  const renderDashboard = () => {
    return render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  };

  test('renders device management section', () => {
    renderDashboard();
    expect(screen.getByText(/manage devices/i)).toBeInTheDocument();
    expect(screen.getByText(/add device/i)).toBeInTheDocument();
  });

  test('handles device addition', () => {
    renderDashboard();
    const addButton = screen.getByText(/add device/i);
    fireEvent.click(addButton);
    expect(screen.getByText(/new device form/i)).toBeInTheDocument();
  });
}); 