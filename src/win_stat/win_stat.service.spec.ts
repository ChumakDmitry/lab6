import { Test, TestingModule } from '@nestjs/testing';
import { WinStatService } from './win_stat.service';

describe('WinStatService', () => {
  let service: WinStatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WinStatService],
    }).compile();

    service = module.get<WinStatService>(WinStatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
