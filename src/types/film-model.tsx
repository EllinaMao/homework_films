export interface Film {
  id: number;
  title: string;
  description: string;
  film_url: string;
}

export const films: Film[] = [
  {
    id: 1,
    title: "InterCat",
    description: "A mind-bending thriller featuring a clever cat.",
    film_url: "https://www.example.com/intercat",
  },
  {
    id: 2,
    title: "The Catrix",
    description: "A sci-fi classic featuring a curious cat.",
    film_url: "https://www.example.com/the-catrix",
  },
  {
    id: 3,
    title: "Mrs Cat",
    description: "A heartwarming tale of a cat's adventures.",
    film_url: "https://www.example.com/mrs-cat",
  },
];
