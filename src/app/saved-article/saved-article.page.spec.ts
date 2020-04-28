import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavedArticlePage } from './saved-article.page';

describe('SavedArticlePage', () => {
  let component: SavedArticlePage;
  let fixture: ComponentFixture<SavedArticlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedArticlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavedArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
