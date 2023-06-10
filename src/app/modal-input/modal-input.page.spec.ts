import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalInputPage } from './modal-input.page';

describe('ModalInputPage', () => {
  let component: ModalInputPage;
  let fixture: ComponentFixture<ModalInputPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
