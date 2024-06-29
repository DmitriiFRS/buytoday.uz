import "dotenv/config";
import * as contentful from "contentful";

export const client = contentful.createClient({
   space: process.env.CONTENTFUL_SPACE_ID as string,
   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});
