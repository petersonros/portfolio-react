import { Item } from "@/types/Item";

export const items: Item[] = [
  {
    date: new Date(2023, 3, 15),
    category: "food",
    title: "Almoço",
    value: 32.00,
  },
  {
    date: new Date(2023, 4, 15),
    category: "food",
    title: "Lanche",
    value: 40.00,
  },
  {
    date: new Date(2023, 4, 16),
    category: "rent",
    title: "Aluguel",
    value: 2300.00,
  },
  {
    date: new Date(2023, 4, 18),
    category: "bonus",
    title: "Comissão",
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
