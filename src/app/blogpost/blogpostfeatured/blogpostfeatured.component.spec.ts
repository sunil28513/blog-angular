import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostfeaturedComponent } from './blogpostfeatured.component';

describe('BlogpostfeaturedComponent', () => {
  let component: BlogpostfeaturedComponent;
  let fixture: ComponentFixture<BlogpostfeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpostfeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostfeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
