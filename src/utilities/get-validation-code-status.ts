type TypeWithKey<T> = { [key: string]: T };

export const getValidationError = (errorCode: string): string => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: "Network error",
    ERR_TIMEOUT: "Timeout error",
    ERR_BAD_REQUEST: "Error bad request",
    ERR_BAD_RESPONSE: "Error bad response",
    ERR_CANCEL: "Se canceló la petición",
    ERR_UNKNOWN: "Unknown error",
    ERR_400: "Error 400",
    ERR_401: "Error 401",
    ERR_403: "Error 403",
    ERR_404: "Error 404",
    ERR_500: "Error 500",
    ERR_502: "Error 502",
    ERR_503: "Error 503",
    ERR_504: "Error 504",
    200: "Everything is OK 😀",
    201: "Everything is OK 😀",
    400: "Bad Request 😔",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout"
  };

  return codeMatcher[errorCode];
};
