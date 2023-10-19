import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ParamCardComponent } from "./param-card.component";

describe("ParamCardComponent", () => {
  let component: ParamCardComponent;
  let fixture: ComponentFixture<ParamCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParamCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
