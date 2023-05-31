import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewListComponent } from './new-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NewListComponent', () => {
  let component: NewListComponent;
  let fixture: ComponentFixture<NewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewListComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
