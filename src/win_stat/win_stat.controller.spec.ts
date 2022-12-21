import { Test, TestingModule } from '@nestjs/testing';
import { WinStatController } from './win_stat.controller';
import { WinStatService } from './win_stat.service';

describe('WinStatController', () => {
  let controller: WinStatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WinStatController],
      providers: [WinStatService],
    }).compile();

    controller = module.get<WinStatController>(WinStatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
