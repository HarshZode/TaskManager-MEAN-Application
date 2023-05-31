import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskViewComponent } from './task-view.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TaskViewComponent', () => {
  let component: TaskViewComponent;
  let fixture: ComponentFixture<TaskViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskViewComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: {
              subscribe: (fn: (value: any) => void) => fn({ listId: '123' })
            }
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
