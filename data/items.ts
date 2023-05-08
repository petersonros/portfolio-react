import { Item } from "@/types/Item";

export const items: Item[] = [
  {
    date: new Date(2023, 3, 15),
    category: "outflow",
    title: "Almoço",
    value: 32.12,
  },
  {
    date: new Date(2023, 3, 15),
    category: "outflow",
    title: "Lanche",
    value: 28.12,
  },
  {
    date: new Date(2023, 3, 16),
    category: "outflow",
    title: "Aluguel",
    value: 2300,
  },
  {
    date: new Date(2023, 4, 18),
    category: "inflow",
    title: "Sálario",
    value: 4500,
  },
  {
    date: new Date(2023, 4, 7),
    category: "outflow",
    title: "Almoço",
    value: 150,
  },
  {
    date: new Date(2023, 4, 7),
    category: "outflow",
    title: "Jantar",
    value: 350,
  },
];
