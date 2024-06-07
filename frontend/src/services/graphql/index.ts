import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://reading-list-sf03.onrender.com",
  cache: new InMemoryCache(),
});

const query = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

export const fetchBooks = async () => {
  const { data } = await client.query({ query });

  return data.books;
};
