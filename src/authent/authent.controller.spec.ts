import { Test, TestingModule } from '@nestjs/testing';
import { AuthentController } from './authent.controller';

describe('AuthentController', () => {
  let controller: AuthentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthentController],
    }).compile();

    controller = module.get<AuthentController>(AuthentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
