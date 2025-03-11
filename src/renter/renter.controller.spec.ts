import { Test, TestingModule } from '@nestjs/testing';
import { RenterController } from './renter.controller';
import { RenterService } from './renter.service';

describe('RenterController', () => {
  let controller: RenterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RenterController],
      providers: [RenterService],
    }).compile();

    controller = module.get<RenterController>(RenterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
