import { render, screen } from '@testing-library/react-native';
import App from './App';

describe('App', () => {
  it('muestra el nombre del producto como encabezado', async () => {
    await render(<App />);
    expect(screen.getByRole('header', { name: 'TorQ' })).toBeTruthy();
  });
});
