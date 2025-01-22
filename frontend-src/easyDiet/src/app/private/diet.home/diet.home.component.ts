import { Component, inject } from '@angular/core';
import { DietWidgetComponent } from "../diet.widget/diet.widget.component";
import { DietWidgetHeaderComponent } from "../diet.widget.header/diet.widget.header.component";
import { DietWidgetContentComponent } from "../diet.widget.content/diet.widget.content.component";
import { DietplansService } from '../../services/dietplans.service';

@Component({
  selector: 'app-diet-home',
  standalone: true,
  imports: [DietWidgetComponent, DietWidgetHeaderComponent, DietWidgetContentComponent],
  templateUrl: './diet.home.component.html',
  styleUrl: './diet.home.component.scss'
})
export class DietHomeComponent {
  //simula il numero totale di diete a db
  n:Array<number> = [1,2,3,4,5] 
  dietPlans = inject(DietplansService).dietInfoList

  // gestisce gli eventi ricevuti dal componente figlio
  eventHandler(message: string){
    console.log('event'+ message)
  }
}
