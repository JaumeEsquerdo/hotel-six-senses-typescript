import { render, screen, act } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import Home from './Home'
import { AppProvider } from '@/context/AppContext'

/**
 * COMPARATIVA DE ROUTERS PARA TESTING
 * -----------------------------------
 * | Característica | BrowserRouter (Producción) | MemoryRouter (Tests)       |
 * |----------------|----------------------------|----------------------------|
 * | Uso principal  | La aplicación real.        | Vitest, Jest, Storybook.   |
 * | Dónde mira     | Barra de direcciones URL.  | Lista interna en memoria.  |
 * | Persistencia   | Se mantiene al recargar.   | Se borra al terminar test. |
 * | Dependencias   | Requiere 'window' real.    | 100% independiente.        |
 * * NOTA: Usamos MemoryRouter porque JSDOM (el navegador falso de Vitest) 
 * no gestiona bien los cambios de URL reales, y MemoryRouter evita 
 * errores de 'basename' y colisiones entre tests.
 */
import { MemoryRouter } from 'react-router-dom'


describe('renderizar Onboarding y Home', () => {
    test('renderizar Onboarding y comprobar si aparece al principio', () => {
        render(<Home />)

        // Al ser palabras separadas, las buscamos una a una
        expect(screen.getByText(/hotel/i)).toBeInTheDocument();
        expect(screen.getByText(/six/i)).toBeInTheDocument();
        expect(screen.getByText(/senses/i)).toBeInTheDocument();
        expect(screen.getByText(/ibiza/i)).toBeInTheDocument();
    })

    test('cambiar de onboarding a home', () => {
        vi.useFakeTimers(); // 1. Preparar relojes, se para timer normal para renderizar el efecto setTimeout

        render(
            <MemoryRouter>
                <AppProvider>
                    <Home />
                </AppProvider>
            </MemoryRouter>
        )

        act(() => {
            vi.advanceTimersByTime(4000) // El reloj vuela y React procesa el cambio
        })

        expect(screen.getByText(/reservar/i)).toBeInTheDocument()

        vi.useRealTimers() // Limpiar reloj fake para volver al normal

    })
})


/* const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <MemoryRouter>
      <AppProvider>
        {ui}
      </AppProvider>
    </MemoryRouter>
  );
}; */