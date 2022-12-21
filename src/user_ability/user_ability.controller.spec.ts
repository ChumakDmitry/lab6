import { Test, TestingModule } from '@nestjs/testing';
import { UserAbilityController } from './user_ability.controller';
import { UserAbilityService } from './user_ability.service';

describe('UserAbilityController', () => {
  let controller: UserAbilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAbilityController],
      providers: [UserAbilityService],
    }).compile();

    controller = module.get<UserAbilityController>(UserAbilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
