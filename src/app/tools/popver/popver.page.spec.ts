import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopverPage } from './popver.page';

describe('PopverPage', () => {
  let component: PopverPage;
  let fixture: ComponentFixture<PopverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
