import { createClient } from "contentful";

const client = createClient({
   space: "YOUR_SPACE_ID",
   accessToken: "YOUR_ACCESS_TOKEN",
});

// Retrieve the list of blog posts from Contentful
const getBlogPosts = async () => {
   const response = await client.getEntries({
      content_type: "blogPost",
   });

   return response.items;
};

export default getBlogPosts;
