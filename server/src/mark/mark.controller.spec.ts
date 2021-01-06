import { Test, TestingModule } from '@nestjs/testing';
import { MarksController } from './mark.controller';

describe('MarkController', () => {
  let controller: MarksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarksController],
    }).compile();

    controller = module.get<MarksController>(MarksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});