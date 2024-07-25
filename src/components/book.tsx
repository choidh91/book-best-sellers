"use client";

import { useRouter } from "next/navigation";
import styles from "@/styles/book.module.css";
import Link from "next/link";
//import { formattedNetWorth } from "@/lib/format";

export interface IBook {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

interface BookProps {
  book: IBook;
}

export default function Book({ book }: BookProps) {
  const router = useRouter();

  const handleClick = () => {
    //   router.push(`/people/${person.id}`);
  };

  return (
    <div className={styles.book}>
      {book.display_name}
      {/* <img src={person.squareImage} alt={person.name} onClick={handleClick} />
      <Link prefetch href={`/people/${person.id}`}>
        {person.name}
      </Link>
      <span>{`${formattedNetWorth(person.netWorth)} / ${
        person.industries[0]
      }`}</span> */}
    </div>
  );
}
