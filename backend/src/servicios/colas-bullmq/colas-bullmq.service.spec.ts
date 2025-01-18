import { Test, TestingModule } from '@nestjs/testing';
import { ColasBullmqService } from './colas-bullmq.service';

describe('ColasBullmqService', () => {
  let service: ColasBullmqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColasBullmqService],
    }).compile();

    service = module.get<ColasBullmqService>(ColasBullmqService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
