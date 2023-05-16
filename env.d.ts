declare namespace NodeJS {
  interface ProcessEnv {
    PORT: number;
    SECRET_KEY: string;
    MONGODB_URI: string;
  }
}
