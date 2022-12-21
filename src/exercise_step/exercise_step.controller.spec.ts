import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseStepController } from './exercise_step.controller';
import { ExerciseStepService } from './exercise_step.service';

describe('ExerciseStepController', () => {
  let controller: ExerciseStepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseStepController],
      providers: [ExerciseStepService],
    }).compile();

    controller = module.get<ExerciseStepController>(ExerciseStepController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
