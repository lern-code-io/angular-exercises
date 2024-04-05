import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ModifyComment',
    standalone: true

})
export class ModifyComment implements PipeTransform {
    transform(body: string | undefined): string | undefined {



        return body;
    }
}
