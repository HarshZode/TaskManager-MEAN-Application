import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewTaskComponent } from './new-task.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Add this import

describe('NewTaskComponent', () => {
  let component: NewTaskComponent;
  let fixture: ComponentFixture<NewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTaskComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ listId: 1 }), // Replace with the appropriate route params
          },
        },
      ],
      imports: [
        HttpClientTestingModule // Add this line to provide HttpClient
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
