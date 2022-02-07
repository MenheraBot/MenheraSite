declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL: string;
      NEXT_PUBLIC_GITHUB_URL: string;
      NEXT_PUBLIC_BOT_INVITE_URL: string;
      NEXT_PUBLIC_GA_ID: string;
    }
  }
}

declare module 'string.prototype.replaceall';
// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
