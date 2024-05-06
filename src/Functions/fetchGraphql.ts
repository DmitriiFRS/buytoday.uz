export default async function fetchGraphql(query: any) {
   try {
      return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
         method: "POST",
         next: {
            revalidate: 30,
         },
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
         },
         body: JSON.stringify({ query }),
      }).then((response) => response.json());
   } catch (error: any) {
      console.log("an error occured", error);
   }
}
