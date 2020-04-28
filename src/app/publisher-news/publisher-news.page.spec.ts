import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublisherNewsPage } from './publisher-news.page';

describe('PublisherNewsPage', () => {
  let component: PublisherNewsPage;
  let fixture: ComponentFixture<PublisherNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublisherNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
