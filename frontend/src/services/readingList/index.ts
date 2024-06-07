import { Book } from "../../types/index";

export const handleReadingList = (newBook: Book) => {
  // Get the reading list from local storage, or create an empty array if it doesn't exist
  const readingString = localStorage.getItem("readingList");
  const readingList: Book[] = readingString ? JSON.parse(readingString) : [];

  // Check if the item already exists in the reading list
  const itemIndex = readingList.findIndex(
    (item) => item.title === newBook.title
  );

  if (itemIndex === -1) {
    // If the item does not exist, add it to the reading list
    readingList.push(newBook);
  } else {
    // If the item exists, remove it from the reading list
    readingList.splice(itemIndex, 1);
  }

  // Update the reading list in local storage
  localStorage.setItem("readingList", JSON.stringify(readingList));
};
