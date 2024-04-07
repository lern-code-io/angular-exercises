import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'modify-comment',
    standalone: true

})
export class ModifyComment implements PipeTransform {
    transform(body: string | undefined): string | undefined {

        return body;
    }
}
