import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseStepService } from './exercise_step.service';

describe('ExerciseStepService', () => {
  let service: ExerciseStepService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseStepService],
    }).compile();

    service = module.get<ExerciseStepService>(ExerciseStepService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
