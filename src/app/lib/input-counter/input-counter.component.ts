import { Component, OnInit, forwardRef, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

export function createCounterRangeValidator(maxValue, minValue) {
  return (c: FormControl) => {
    let err = {
      rangeError: {
        given: c.value,
        max: maxValue || 10,
        min: minValue || 0
      }
    };

    return (c.value > +maxValue || c.value < +minValue) ? err : null;
  }
}


@Component({
  selector: 'input-counter',
  templateUrl: './input-counter.component.html',
  styleUrls: ['./input-counter.component.css'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputCounterComponent), multi: true },
  { provide: NG_VALIDATORS, useExisting: forwardRef(() => InputCounterComponent), multi: true }
  ]
})
export class InputCounterComponent implements ControlValueAccessor, OnChanges {
  @Input('counterValue') _counterValue = 1;
  @Input() counterRangeMax;
  @Input() counterRangeMin;
  @Input() btnClass;
  @Input() inputClass;
  @Output() onCounterChange = new EventEmitter();
  propagateChange: any = () => { };
  validateFn: any = () => { };
  get counterValue() {
    return this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(val);
  }

  ngOnChanges(inputs) {
    if (inputs.counterRangeMax || inputs.counterRangeMin) {
      this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
      this.propagateChange(this.counterValue);
    }

  }

  writeValue(value) {
    if (value) {
      this.counterValue = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }

  increase() {
    this.counterValue++;
    this.onCounterChange.emit(this.counterValue);
  }

  decrease() {
    this.counterValue = Math.max(this.counterValue - 1, 0);
    this.onCounterChange.emit(this.counterValue)
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }

  counterChanged(event) {
    //console.log(event);
    this.counterValue = event.srcElement.value;
    this.onCounterChange.emit(this.counterValue);
  }

}