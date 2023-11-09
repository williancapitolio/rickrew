import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const useCatchRouteError = (): string => {
  const error = useRouteError();

  let errorMessage: string = "Algo deu errado!";

  if (isRouteErrorResponse(error)) errorMessage = error.statusText;
  else if (error instanceof Error) errorMessage = error.message;
  else if (typeof error === "string") errorMessage = error;
  else errorMessage = "Erro desconhecido!";

  if (errorMessage === "Not Found") errorMessage = "Não encontrado!";

  return errorMessage;
};
