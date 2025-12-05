import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/contexts/AuthContext';

const createTestQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

interface AllTheProvidersProps {
  children: React.ReactNode;
  initialRoute?: string;
}

const AllTheProviders = ({ children, initialRoute = '/' }: AllTheProvidersProps) => {
  const queryClient = createTestQueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[initialRoute]}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </MemoryRouter>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & { initialRoute?: string }
) => {
  const { initialRoute, ...renderOptions } = options || {};
  
  return render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders initialRoute={initialRoute}>
        {children}
      </AllTheProviders>
    ),
    ...renderOptions,
  });
};

export * from '@testing-library/react';
export { customRender as render };
