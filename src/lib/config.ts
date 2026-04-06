type Environment = "development" | "production";

let NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV !== "development" && NODE_ENV !== "production") {
  NODE_ENV = "development";
}

export const config = {
  NODE_ENV,
  SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN || "",
} as const satisfies {
  NODE_ENV: Environment;
  SANITY_API_READ_TOKEN: string;
};

export default config;
