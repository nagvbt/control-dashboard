import { TestBed, inject } from "@angular/core/testing";

import { EventStreamService } from "./event-stream.service";

describe("EventStreamService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventStreamService],
    });
  });

  it("should be created", inject(
    [EventStreamService],
    (service: EventStreamService) => {
      expect(service).toBeTruthy();
    }
  ));
});
