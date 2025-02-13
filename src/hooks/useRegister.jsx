import { useAuthContext } from '@hooks/useAuthContext';
import { useState } from 'react';

import { APIError, ExceptionResolver } from '@utils/translate-api-errors';
const { VITE_BACKEND_API } = import.meta.env;

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  /**
   * Perform a register request to the server
   * @param {Object} params Parameters
   * @param {string} params.firstName User first name
   * @param {string} params.lastName User last name
   * @param {string} params.email User email
   * @param {string} params.password User password
   */
  async function register(params) {
    const { email, password, firstName, lastName } = params;

    // Reset loading and error state
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${VITE_BACKEND_API}/v1/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, firstName, lastName })
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

  return { register, isLoading, error };
}
