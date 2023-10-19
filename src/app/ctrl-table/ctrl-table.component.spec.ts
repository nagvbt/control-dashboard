import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CtrlTableComponent } from "./ctrl-table.component";

describe("CtrlTableComponent", () => {
  let component: CtrlTableComponent;
  let fixture: ComponentFixture<CtrlTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CtrlTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrlTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
