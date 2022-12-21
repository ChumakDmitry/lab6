import { Test, TestingModule } from '@nestjs/testing';
import { MoveGoalController } from './move_goal.controller';
import { MoveGoalService } from './move_goal.service';

describe('MoveGoalController', () => {
  let controller: MoveGoalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoveGoalController],
      providers: [MoveGoalService],
    }).compile();

    controller = module.get<MoveGoalController>(MoveGoalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
