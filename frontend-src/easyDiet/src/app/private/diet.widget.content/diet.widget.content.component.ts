import { Component, ElementRef, QueryList, signal, ViewChildren, WritableSignal, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-diet-widget-content',
  standalone: true,
  imports: [],
  templateUrl: './diet.widget.content.component.html',
  styleUrl: './diet.widget.content.component.scss'
})
export class DietWidgetContentComponent {
  // input e output
  @Input() n!: number;
  @Output() inputReceived = new EventEmitter<string>();

  // proprietà
  i:Array<number> = [1,2,3,4,5]
  count: WritableSignal<number> = signal(0)
  // elemento QuerySelector
  @ViewChildren('dietFoodList') dietFoodList!: QueryList<ElementRef>
  // rendi visibile lemento successivo
  increment():void {
    if (this.count().valueOf() < (this.i.length - 1) ){
      this.count.update(n => n + 1)
      console.log(this.count().valueOf() )
      this.dietFoodList.forEach((i, index) => {
        if(index == (this.count().valueOf() - 1)){
          i.nativeElement.hidden = true
        }
        if(index == this.count().valueOf()){
        i.nativeElement.hidden = false
        console.log(i.nativeElement.__ngContext__)
        }
      });
    }
  }
  // rendi visibile l'elemento precedente
  decrement(){
    if (this.count().valueOf() > 0 && this.count().valueOf() <= this.i.length ){
      this.count.update(n => n - 1)
      console.log(this.count().valueOf())
      this.dietFoodList.forEach((i, index) => {
        if(index == this.count().valueOf()){
        i.nativeElement.hidden = false
        console.log(i.nativeElement.__ngContext__)
        }
        if(index == (this.count().valueOf() + 1)){
          i.nativeElement.hidden = true
          console.log(i.nativeElement.__ngContext__)
          }
      });
      
    }else{
      null
    } 
  }

  ngAfterViewInit(){
    console.log(this.dietFoodList)
    this.dietFoodList.forEach((i, index) => {
      if(index == 0){
      i.nativeElement.hidden = false
      console.log(i.nativeElement.__ngContext__)
      }
    });
    
  }

}
