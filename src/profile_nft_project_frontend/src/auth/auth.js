import { AuthClient } from "@dfinity/auth-client";

export const initAuth = async () => {
  const authClient = await AuthClient.create();

  if (!authClient.isAuthenticated()) {
    await authClient.login({
      identityProvider:
        "https://identity.ic0.app/#authorize", // Internet Identity URL
      onSuccess: () => {
        window.location.reload();
      },
    });
  }

  return authClient;
};

export const getIdentity = async () => {
  const authClient = await AuthClient.create();
  return authClient.getIdentity();
};

export const getPrincipalId = async () => {
  const identity = await getIdentity();
  return identity.getPrincipal().toString();
};
