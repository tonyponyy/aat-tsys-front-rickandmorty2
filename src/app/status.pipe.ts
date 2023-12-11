import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value == "Alive"){
      return "🫀";
    }else{
      if(value == "Dead"){
        return "☠️";
      }else{
        return "❓"
      }
    }
  }
}
