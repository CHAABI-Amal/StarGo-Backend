import { Test, TestingModule } from '@nestjs/testing';
import { AuthentService } from './authent.service';

describe('AuthentService', () => {
  let service: AuthentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthentService],
    }).compile();

    service = module.get<AuthentService>(AuthentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
