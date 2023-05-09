import { Item } from "@/types/Item";

export const items: Item[] = [
  {
    date: new Date(2023, 4, 15),
    category: "food",
    title: "Almoço",
    value: 32.12,
  },
  {
    date: new Date(2023, 4, 15),
    category: "rent",
    title: "Lanche",
    value: 28.12,
  },
  {
    date: new Date(2023, 4, 16),
    category: "salary",
    title: "Aluguel",
    value: 2300.00,
  },
  {
    date: new Date(2023, 4, 18),
    category: "bonus",
    title: "Sálario",
    value: 4500.00,
  },
  {
    date: new Date(2023, 4, 7),
    category: "outflow",
    title: "Almoço",
    value: 150.00,
  },
  {
    date: new Date(2023, 4, 7),
    category: "inflow",
    title: "Presente",
    value: 350.00,
  },
];
