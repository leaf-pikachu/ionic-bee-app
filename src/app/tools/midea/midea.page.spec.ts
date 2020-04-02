import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MideaPage } from './midea.page';

describe('MideaPage', () => {
  let component: MideaPage;
  let fixture: ComponentFixture<MideaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MideaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MideaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
