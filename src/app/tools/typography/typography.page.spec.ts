import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TypographyPage } from './typography.page';

describe('TypographyPage', () => {
  let component: TypographyPage;
  let fixture: ComponentFixture<TypographyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TypographyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
