import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WebService } from './web.service';

describe('WebService', () => {
  let service: WebService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WebService]
    });
    service = TestBed.inject(WebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
