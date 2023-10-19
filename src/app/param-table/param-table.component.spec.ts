import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ParamTableComponent } from "./param-table.component";

describe("ParamTableComponent", () => {
  let component: ParamTableComponent;
  let fixture: ComponentFixture<ParamTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParamTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
