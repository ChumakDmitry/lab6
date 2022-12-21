import { Test, TestingModule } from '@nestjs/testing';
import { MoveGoalService } from './move_goal.service';

describe('MoveGoalService', () => {
  let service: MoveGoalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoveGoalService],
    }).compile();

    service = module.get<MoveGoalService>(MoveGoalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
