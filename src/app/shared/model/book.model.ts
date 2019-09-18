import { Author } from "./author.model";
import { BookState } from "./book-state.model";
import { BookImage } from "./book-image";

export class Book {
    id: number;
    name: string;
    edition?: string;
    description?:string;
    authors:Author[];
    state:BookState;
    images_list:BookImage[];
  }
  