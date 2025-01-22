import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-diet-widget',
  standalone: true,
  imports: [],
  templateUrl: './diet.widget.component.html',
  styleUrl: './diet.widget.component.scss'
})
export class DietWidgetComponent {
  @Input() n!: number;
  @Output() count = new EventEmitter<string>();
  
  // emetti eventi al componente padre
  notifyParent(){
    this.count.emit('evento ricevuto')
  }

  // conferma evento ricevuto
  ngAfterViewInit(){

    console.log('evento'+this.n)
  }
}
