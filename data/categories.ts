import { Category } from "@/types/Category";

export const categories: Category = {
  food: { title: "Alimentação", color: "#057", expense: true },
  rent: { title: "Aluguel", color: "#950", expense: true },
  salary: { title: "Salário", color: "#0f0", expense: false },
  bonus: { title: "Comissão", color: "#00f", expense: false },
  inflow: { title: "Entrada", color: "#00f", expense: false },
  outflow: { title: "Saída", color: "#f00", expense: true },
};
