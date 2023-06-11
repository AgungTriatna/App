import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NfcReaderPage } from './nfc-reader.page';

describe('NfcReaderPage', () => {
  let component: NfcReaderPage;
  let fixture: ComponentFixture<NfcReaderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NfcReaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
