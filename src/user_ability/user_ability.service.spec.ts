import { Test, TestingModule } from '@nestjs/testing';
import { UserAbilityService } from './user_ability.service';

describe('UserAbilityService', () => {
  let service: UserAbilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAbilityService],
    }).compile();

    service = module.get<UserAbilityService>(UserAbilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
