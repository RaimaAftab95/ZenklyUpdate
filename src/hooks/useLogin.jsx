import { useAuthContext } from '@hooks/useAuthContext';
import { useState } from 'react';

import { APIError, ExceptionResolver } from '@utils/translate-api-errors';

const { VITE_BACKEND_API } = import.meta.env;

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  /**
   * Perform a login request to the server
   * @param {Object} params Parameters
   * @param {string} params.email User email
   * @param {string} params.password User password
   */
  async function login(params) {
    const { email, password } = params;

    // Reset loading and error state
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${VITE_BACKEND_API}/v1/auth/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new APIError(data.message, {
          type: data.error,
          message: data.message,
          key: data.key
        });
      }

      localStorage.setItem('token', data.token);
      dispatch({ type: 'LOGIN', payload: data });
    } catch (error) {
      const { resolved, message } = ExceptionResolver.resolve(error);

      if (resolved) {
        setError(message);
      }

      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  return { login, isLoading, error };
}
