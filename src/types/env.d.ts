declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      COOKIE_SECRET: string;
    }
  }
}

export {};
