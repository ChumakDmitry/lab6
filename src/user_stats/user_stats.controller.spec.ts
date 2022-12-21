import { Test, TestingModule } from '@nestjs/testing';
import { UserStatsController } from './user_stats.controller';
import { UserStatsService } from './user_stats.service';

describe('UserStatsController', () => {
  let controller: UserStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserStatsController],
      providers: [UserStatsService],
    }).compile();

    controller = module.get<UserStatsController>(UserStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
