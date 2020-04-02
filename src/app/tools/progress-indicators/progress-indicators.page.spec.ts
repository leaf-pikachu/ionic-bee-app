import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgressIndicatorsPage } from './progress-indicators.page';

describe('ProgressIndicatorsPage', () => {
  let component: ProgressIndicatorsPage;
  let fixture: ComponentFixture<ProgressIndicatorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressIndicatorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressIndicatorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
