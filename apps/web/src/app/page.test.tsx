import { renderToStaticMarkup } from 'react-dom/server';
import HomePage from './page';

describe('Página de inicio', () => {
  it('muestra el nombre del producto como título principal', () => {
    expect(renderToStaticMarkup(<HomePage />)).toContain('<h1>TorQ</h1>');
  });
});
