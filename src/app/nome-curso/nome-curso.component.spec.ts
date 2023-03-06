import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeCursoComponent } from './nome-curso.component';

describe('NomeCursoComponent', () => {
  let component: NomeCursoComponent;
  let fixture: ComponentFixture<NomeCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomeCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomeCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
