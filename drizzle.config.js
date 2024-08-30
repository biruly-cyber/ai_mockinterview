/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/models/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://aaf_ride_owner:O0tHkWspKU3l@ep-broad-moon-a18mhwa2.ap-southeast-1.aws.neon.tech/ai_interview_mocker?sslmode=require",
  },
};
