import { HttpLink } from "@apollo/client";
import {
  CombinedGraphQLErrors,
  CombinedProtocolErrors,
} from "@apollo/client/errors/errors.cjs";
import { ErrorLink } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";

export const errorLink = new ErrorLink(({ error }) => {
  if (CombinedGraphQLErrors.is(error)) {
    error.errors.forEach((err) =>
      console.error(
        `[GraphQL error]: Message: ${err.message}, Path: ${err.path}`,
      ),
    );
  } else if (CombinedProtocolErrors.is(error)) {
    error.errors.forEach((err) =>
      console.error(
        `[Protocol error]: Message: ${err.message}`,
        err.extensions,
      ),
    );
  } else {
    console.error(`[Network/Unknown error]:`, error);
  }
});

export const retryLink = new RetryLink({
  delay: { initial: 300, max: 5000, jitter: true },
  attempts: {
    max: 3,
    retryIf: (error) =>
      !!error && !("statusCode" in error && error.statusCode === 401),
  },
});

export const httpLink = new HttpLink({
  uri: process.env.API_URL + "/graphql",
  headers: {
    "content-type": "application/json",
  },
});
