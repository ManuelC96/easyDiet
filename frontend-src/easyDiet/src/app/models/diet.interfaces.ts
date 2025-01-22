
export interface DietPlan {
    id: number;
    name: string;
    total_calories: number;
    carbs: number;
    proteins: number;
    fats: number;
  }
  


export interface FoodItem {
    id: number;
    name: string;
    category: string;
  }