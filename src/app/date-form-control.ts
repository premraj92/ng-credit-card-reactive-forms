import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {

    setValue(value: string | null , options: any) {
        if (!value || null) {
            super.setValue('' , { ...options, emitModelToViewChange: true });
            return;
        }
        if (value.match(/[^0-9|\/]/gi)) {
          super.setValue(this.value, { ...options, emitModelToViewChange: true });
          return;
        }

        if (value.length > 5) {
          super.setValue(this.value, { ...options, emitModelToViewChange: true });
          return;
        }

        if (value.length === 2 && this.value.length === 3) {
          super.setValue(value, { ...options, emitModelToViewChange: true });
          return;
        }

        if (value.length === 2) {
          super.setValue(value + '/', { ...options, emitModelToViewChange: true });
          return;
        }
        super.setValue(value, { ...options, emitModelToViewChange: true });
      }

    //    // method to override the inbuilt setValue(FormControl.setValue()) function with new Value & options as args
    //    callSuper(val: string , options: any) {
    //     super.setValue(val , {
    //         ...options ,
    //         emitModelToViewChange: true
    //     });
    // }

    // setValue(val: string|null, options: any) {
    //     // check if val is null from FormGroup.reset() or backspaced to blank
    //     if(val) {
    //       if(val.length === 1 && val.match(/^[0,1]$/)) {    // '' to 'm'
    //         this.callSuper(val, options);
    //       } else if(val.length === 2) {
    //         if(this.value.length === 1 && val.match(/^[0,1][0-2]$/)) {  // 'm' to 'mm/'
    //           this.callSuper(val + '/', options);
    //         } else {                                                    // 'mm/' back to 'm'
    //           this.callSuper(val[0], options);
    //         }
    //       } else if(val.length === 4 && val.match(/^[0,1][0-2]\/[2]$/)) {   // 'mm/' to 'mm/y'
    //         this.callSuper(val, options);
    //       } else if(val.length === 5 && val.match(/^[0,1][0-2]\/[2][0-9]$/)) {  // 'mm/y' to 'mm/yy'
    //         this.callSuper(val, options);
    //       } else if(val.length === 3 && this.value.length === 4) {    // 'mm/y' back to 'mm/'
    //         this.callSuper(val, options);
    //       } else {
    //         this.callSuper(this.value, options);   // if all of above fail
    //       }
    //     } else {
    //       this.callSuper('', options); // reset to ''
    //     }
    //   }
}
