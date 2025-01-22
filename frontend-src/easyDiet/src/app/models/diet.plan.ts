interface Food {
    name: string;
    kcal: number;
    grams: number;
}


interface Meal {
    name: string;
    kcal: number;
    food: Food[];
    
}


export interface DietPlan {
    id: string;
    meals: Meal[];

}