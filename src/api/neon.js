import { neon } from "@neondatabase/serverless";

const sql = neon(import.meta.env.VITE_NEON_DATABASE_URL);

console.log("initialized neon connection");

export default sql;
