import { Component, input } from '@angular/core';
import { FoodItem } from '../../models/diet.interfaces';
import { DietPlan } from '../../models/diet.interfaces';

@Component({
  selector: 'app-diet-widget-header',
  standalone: true,
  imports: [],
  templateUrl: './diet.widget.header.component.html',
  styleUrl: './diet.widget.header.component.scss'
})
export class DietWidgetHeaderComponent {
  // signal input del componente 
  info = input.required<DietPlan>()
  
}
