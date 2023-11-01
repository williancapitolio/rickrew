import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 400:
        return <p>Parece que algo deu errado na requisição!</p>;
      case 401:
        return <p>Você não está autorizado a ver essa página!</p>;
      case 404:
        return <p>Não encontrado!</p>;
      case 500:
        return <p>Erro interno no servidor!</p>;
    }
  }
  return <p>Algo deu errado...</p>;
};
