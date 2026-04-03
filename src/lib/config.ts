type Environment = "development" | "production";

let NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV !== "development" && NODE_ENV !== "production") {
  NODE_ENV = "development";
}

export const config = {
  NODE_ENV,
} as const satisfies {
  NODE_ENV: Environment;
};

export default config;
