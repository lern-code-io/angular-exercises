import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'prefix-comment',
    standalone: true

})
export class PrefixComment implements PipeTransform {
    transform(body: string | undefined): string | undefined {

        return body;
    }
}
