// EnvironmentLink.tsx

type Environment = "dev" | "staging" | "prod";

export const url = (): string => {
  const links: Record<Environment, string> = {
    dev: "http://localhost:3000/api",
    staging: "https://staging.example.com/api",
    prod: "https://daanpitara.onrender.com/api",
  };

  const env = "prod";

  return links[env];
};
