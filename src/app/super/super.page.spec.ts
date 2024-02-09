import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperPage } from './super.page';

describe('SuperPage', () => {
  let component: SuperPage;
  let fixture: ComponentFixture<SuperPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
