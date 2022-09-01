import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'replace'})
export class NgReplacePipe implements PipeTransform {

  transform(value: any, searchVal: string, replaceVal: string): string {
    return value.replaceAll(searchVal, replaceVal);
  }

}
