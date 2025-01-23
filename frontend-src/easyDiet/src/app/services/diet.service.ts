import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DietPlan, FoodItem } from '../models/diet.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DietService {
  private baseUrl = 'http://easydiet-backend-1:5000'; // Assumi che il backend Flask sia in esecuzione su questa URL

  constructor(private http: HttpClient) {}

  // GET /diet-plans
  getDietPlans(): Observable<DietPlan[]> {
    return this.http.get<DietPlan[]>(`${this.baseUrl}/diet-plans`);
  }

  // POST /diet-plans
  createDietPlan(plan: Partial<DietPlan>): Observable<{ message: string }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<{ message: string }>(`${this.baseUrl}/diet-plans`, plan, { headers });
  }

  // POST /food-items
  addFoodItem(food: Partial<FoodItem & { diet_id: number }>): Observable<{ message: string }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<{ message: string }>(`${this.baseUrl}/food-items`, food, { headers });
  }

  // DELETE /diet-plans/:id
  deleteDietPlan(planId: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/diet-plans/${planId}`);
  }
}


