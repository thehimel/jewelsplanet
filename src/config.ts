import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 8000;
const ENVIRONMENT = process.env.ENVIRONMENT || 'PROD'  // Default to 'PROD' if ENVIRONMENT is not set
export const isDevelopment = ENVIRONMENT === 'DEV';
