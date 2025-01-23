import gzappy from "gzappy-js";

const GZAPPY_API_TOKEN = process.env.GZAPPY_API_TOKEN;
const GZAPPY_INSTANCE_ID = process.env.GZAPPY_INSTANCE_ID;

export const gClient = new gzappy({
  token: GZAPPY_API_TOKEN,
  instanceId: GZAPPY_INSTANCE_ID,
});
