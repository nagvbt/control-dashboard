import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MasterModeComponent } from "./master-mode.component";

describe("MasterModeComponent", () => {
  let component: MasterModeComponent;
  let fixture: ComponentFixture<MasterModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MasterModeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
