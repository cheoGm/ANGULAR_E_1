import { Directive, Input, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[ValidatePattern]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ValidatePatternDirective ),
      multi: true
    }
    ]
})
export class ValidatePatternDirective implements Validator{

  @Input('ValidatePattern') param:string;
  validate(control :AbstractControl){
    let text =  control.value;
    if(text && !text.match(new RegExp(this.param))){
      return {
				textContains: {
					textContains: this.param
        }
      }
    }else{return null;}
  }

}
