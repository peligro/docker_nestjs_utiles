import { Test, TestingModule } from '@nestjs/testing';
import { EjemploS3Service } from './ejemplo-s3.service';

describe('EjemploS3Service', () => {
  let service: EjemploS3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EjemploS3Service],
    }).compile();

    service = module.get<EjemploS3Service>(EjemploS3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
