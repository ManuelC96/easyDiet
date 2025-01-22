import { Component, inject } from '@angular/core';
import { DietWidgetComponent } from "../diet.widget/diet.widget.component";
import { DietWidgetHeaderComponent } from "../diet.widget.header/diet.widget.header.component";
import { DietWidgetContentComponent } from "../diet.widget.content/diet.widget.content.component";
import { DietService } from '../../services/diet.service';
import { DietPlan } from '../../models/diet.interfaces';
import { FoodItem } from '../../models/diet.interfaces';

@Component({
  selector: 'app-diet-home',
  standalone: true,
  imports: [DietWidgetComponent, DietWidgetHeaderComponent, DietWidgetContentComponent],
  templateUrl: './diet.home.component.html',
  styleUrl: './diet.home.component.scss'
})
export class DietHomeComponent {
  // //simula il numero totale di diete a db
  // n:Array<number> = [1,2,3,4,5] 
  // dietPlans = inject(DietplansService).dietInfoList

  // // gestisce gli eventi ricevuti dal componente figlio
  // eventHandler(message: string){
  //   console.log('event'+ message)
  // }

  // inizializza la proprieta che si occupa di gestire tutti i piani dieta
  dietPlans: DietPlan[] = [];

  constructor(private dietService: DietService) {}

  ngOnInit(): void {
    this.loadDietPlans();
  }

  loadDietPlans(): void {
    this.dietService.getDietPlans().subscribe(plans => {
      this.dietPlans = plans;
    });

    
  }

  createSamplePlan(): void {
    const samplePlan = {
      name: 'Sample Diet Plan',
      total_calories: 2000,
      carbs: 250,
      proteins: 100,
      fats: 70
    };

    this.dietService.createDietPlan(samplePlan).subscribe(response => {
      console.log(response.message);
      this.loadDietPlans(); // Ricarica i dati
    });
  }


}
