import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavPage } from './nav.page';

describe('NavPage', () => {
  let component: NavPage;
  let fixture: ComponentFixture<NavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
