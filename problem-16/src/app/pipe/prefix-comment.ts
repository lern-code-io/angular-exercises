import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'prefixComment',
    standalone: true

})
export class PrefixComment implements PipeTransform {
    transform(body: string | undefined): string | undefined {

      // Todo: Modify body here

        return body;
    }
}
