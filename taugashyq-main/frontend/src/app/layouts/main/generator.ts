import { ICategory, RecipeCategory } from "src/app/models/models";

export const getCategories: ICategory[] = [
    { id: 3, category_id: 3, title: "easy", imgURL: "./../../assets/easy.svg", category: RecipeCategory.salad },
    { id: 4, category_id: 4, title: "middle", imgURL: "./../../assets/middle.svg", category: RecipeCategory.burger },
    { id: 5, category_id: 5, title: "hard", imgURL: "./../../assets/hard.svg", category: RecipeCategory.italian },
    { id: 6, category_id: 6, title: "popular", imgURL: "./../../assets/star.svg", category: RecipeCategory.soup },
    { id: 1, category_id: 1, title: "other", imgURL: "./../../assets/other.svg", category: RecipeCategory.meat },
]