import { Pipe, PipeTransform } from '@angular/core';
//import { format } from 'path';
import { identity } from 'rxjs';

@Pipe({
  name: 'birthYear'
})
export class BirthYearPipe implements PipeTransform {

  transform(ID:string, Format:string): any {
  if(Format=="FullDate")
  {
   if(+ID.slice(1.3)<20)
   return "20"+ID.slice(1, 3)+"-"+ID.slice(3,5)+"-"+ID.slice(5,7);
   else
   return "19"+ID.slice(1, 3)+"-"+ID.slice(3,5)+"-"+ID.slice(5,7);
  }
  else if(Format=="yy")
  {
    if(+ID.slice(1.3)<20)
   return "Year: 20"+ID.slice(1, 3);
   else
   return "Year 19"+ID.slice(1, 3);
  }
  else if(Format=="mm")
  {
   return "Month:"+ID.slice(3,5);
  }
  else if(Format=="dd")
  return "Day:"+ID.slice(5,7);

  }

}
