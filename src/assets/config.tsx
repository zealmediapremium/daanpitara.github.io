// EnvironmentLink.tsx

type Environment = "dev" | "staging" | "prod";

export const domain_route = (): string => {
  const links: Record<Environment, string> = {
    dev: "http://localhost:3000",
    staging: "https://staging.example.com",
    prod: "https://prod.example.com",
  };

  const env = "dev";

  return links[env];
};
