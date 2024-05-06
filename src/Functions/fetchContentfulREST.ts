import * as contentful from "contentful";
import next from "next";
import { revalidateTag } from "next/cache";

const client = contentful.createClient({
   space: process.env.CONTENTFUL_SPACE_ID as string,
   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});
const revalidate = 90;
export default async function fetchData<T>(contentType: T) {
   const result = await client.getEntries({ content_type: contentType as string });
   return result;
}
