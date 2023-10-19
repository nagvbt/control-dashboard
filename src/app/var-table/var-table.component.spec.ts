import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VarTableComponent } from "./var-table.component";

describe("AzelTableComponent", () => {
  let component: VarTableComponent;
  let fixture: ComponentFixture<VarTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VarTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
