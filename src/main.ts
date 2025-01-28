import { Component, computed, provideExperimentalZonelessChangeDetection, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ c() }}!</h1>
  `,
})
export class App {
  
  a = signal(3);
  b = signal(3);

  c = computed(()=> this.a() + this.b()); // output 5
  constructor(){
    setTimeout(()=>{
      this.a.set(2) 
    },5000)
  }

}

bootstrapApplication(App,
  {
    providers: [
      provideExperimentalZonelessChangeDetection()
    ]
  }
  );
