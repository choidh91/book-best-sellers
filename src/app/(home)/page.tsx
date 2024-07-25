import { API_URL } from "@/app/constants";
import Book, { IBook } from "@/components/book";
import styles from "@/styles/home.module.css";
import Link from "next/link";

interface IBestSellers {
  status: string;
  copyright: string;
  num_results: number;
  results: IBook[];
}

async function getBestSellers(): Promise<IBestSellers> {
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const bestSellers = await getBestSellers();

  const { results: books } = bestSellers;

  return (
    <>
      <h1 className="text-center">The New York Times Best Seller Explorer</h1>
      <ul className={styles.list}>
        {books.map((list) => (
          <li key={list.list_name}>
            <Link href={`/list/${list.list_name_encoded}`}>
              {list.display_name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
