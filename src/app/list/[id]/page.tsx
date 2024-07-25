import { API_URL } from "@/app/constants";
import styles from "@/styles/book.module.css";
import Link from "next/link";

interface IBookList {
  status: string;
  copyright: string;
  num_results: number;
  results: {
    list_name: string;
    list_name_encoded: string;
    bestsellers_date: string;
    published_date: string;
    published_date_description: string;
    next_published_date: string;
    display_name: string;
    books: {
      title: string;
      book_image: string;
      amazon_product_url: string;
    }[];
  };
}

async function getBookList(id: string): Promise<IBookList> {
  const response = await fetch(`${API_URL}/list?name=${id}`);
  const json = await response.json();
  return json;
}

export default async function BookList({
  params: { id },
}: {
  params: { id: string };
}) {
  const bookList = await getBookList(id);

  return (
    <>
      {bookList.results.list_name}
      <ul>
        {bookList.results.books.map((book) => (
          <li key={book.title} className={styles.bookItem}>
            <img
              src={book.book_image}
              alt={book.title}
              className={styles.bookImage}
            />
            <span>{book.title}</span>
            <Link className="ml-2" href={book.amazon_product_url}>
              buy now
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
