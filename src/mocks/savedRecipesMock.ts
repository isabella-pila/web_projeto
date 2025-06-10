// src/mocks/savedRecipesMock.ts
export interface Recipe {
  id: string;
  title: string;
  image: string;
  saved: boolean;
}

export const savedRecipesMock: Recipe[] = [
  {
    id: "1",
    title: "Muffin salgado para cães",
    image: "/img/receita1.png",
    saved: true
  },
  {
    id: "2",
    title: "Biscoitinho Saudável de Atum",
    image: "/img/receita2.png",
    saved: true
  },
  {
    id: "3",
    title: "Pizza para cães",
    image: "/img/receita3.png",
    saved: true
  },
  {
    id: "4",
    title: "Sorvete de Banana para Pets",
    image: "/img/receita4.png",
    saved: false
  }
];