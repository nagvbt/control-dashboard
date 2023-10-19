import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EmergencyStopComponent } from "./emergency-stop.component";

describe("EmergencyStopComponent", () => {
  let component: EmergencyStopComponent;
  let fixture: ComponentFixture<EmergencyStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmergencyStopComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
