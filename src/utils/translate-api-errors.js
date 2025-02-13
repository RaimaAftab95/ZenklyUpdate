/**
 * @typedef {Object} ExceptionContext - Exception context
 * @property {string} type - Exception type
 * @property {string} message - Exception message
 * @property {string} [key] - Exception key
 */

/**
 * API Error
 */
class APIError extends Error {
  /**
   * @param {string} message
   * @param {ExceptionContext} [context]
   */
  constructor(message, context = {}) {
    super(message);
    this.name = this.constructor.name;
    this.context = context;
  }
}

/**
 * Resolved error
 * @typedef {Object} ResolvedError - Resolved error
 * @property {boolean} resolved - Whether the error was resolved
 * @property {string} message - Error message
 */

/**
 * Exception resolver
 */
class ExceptionResolver {
  /**
   * Format error message to be user friendly
   * @param {Object} params - Error parameters
   * @param {string} params.field - Field name (e.g. /password)
   * @param {string} params.message - Error message
   * @returns {string}
   */
  static formatErrorMessage(params) {
    const { field, message } = params;

    // Remove leading slash and capitalize field name
    const formattedField = field
      .replace(/^\//, '')
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());

    // Make message more readable
    const formattedMessage = message.toLowerCase();

    return `${formattedField} ${formattedMessage}`;
  }

  /**
   * Resolve the error
   * @param {APIError} error
   * @returns {ResolvedError}
   */
  static resolve(error) {
    const { context } = error;

    if (context.type === 'InvalidArgument') {
      return {
        resolved: true,
        message: ExceptionResolver.formatErrorMessage({
          field: context.key,
          message: context.message
        })
      };
    }

    if (context.type === 'Conflict') {
      return {
        resolved: true,
        message: context.message
      };
    }

    return {
      resolved: false,
      message: error.message
    };
  }
}

export { APIError, ExceptionResolver };
