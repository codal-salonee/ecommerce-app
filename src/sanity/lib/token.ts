import "server-only";

import config from "@/lib/config";

const token = config.SANITY_API_READ_TOKEN;

if (!token) {
  throw new Error("Missing SANITY_API_READ_TOKEN");
}

export default token;
