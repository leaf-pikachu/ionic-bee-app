import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoutingPage } from './routing.page';

describe('RoutingPage', () => {
  let component: RoutingPage;
  let fixture: ComponentFixture<RoutingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoutingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
