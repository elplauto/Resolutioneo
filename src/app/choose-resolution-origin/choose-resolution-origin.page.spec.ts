import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseResolutionOriginPage } from './choose-resolution-origin.page';

describe('ChooseResolutionOriginPage', () => {
  let component: ChooseResolutionOriginPage;
  let fixture: ComponentFixture<ChooseResolutionOriginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseResolutionOriginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseResolutionOriginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
