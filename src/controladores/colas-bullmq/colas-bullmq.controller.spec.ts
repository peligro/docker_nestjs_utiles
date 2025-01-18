import { Test, TestingModule } from '@nestjs/testing';
import { ColasBullmqController } from './colas-bullmq.controller';

describe('ColasBullmqController', () => {
  let controller: ColasBullmqController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColasBullmqController],
    }).compile();

    controller = module.get<ColasBullmqController>(ColasBullmqController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
