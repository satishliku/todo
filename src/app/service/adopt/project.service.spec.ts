import { TestBed } from '@angular/core/testing';

import { ProjectService } from './Project.service';

describe('Project.Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service).toBeTruthy();
  });
});
