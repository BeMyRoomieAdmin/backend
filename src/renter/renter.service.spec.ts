import { Test, TestingModule } from '@nestjs/testing';
import { RenterService } from './renter.service';

describe('RenterService', () => {
  let service: RenterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RenterService],
    }).compile();

    service = module.get<RenterService>(RenterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
