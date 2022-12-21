import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOption } from 'db/data-source';
import { UserStatsModule } from './user_stats/user_stats.module';
import { UserAbilityModule } from './user_ability/user_ability.module';
import { UserRewardModule } from './user_reward/user_reward.module';
import { RewardModule } from './reward/reward.module';
import { FileModule } from './file/file.module';
import { ExerciseStepModule } from './exercise_step/exercise_step.module';
import { ExerciseModule } from './exercise/exercise.module';
import { ArticleModule } from './article/article.module';
import { StatModule } from './stat/stat.module';
import { StickerModule } from './sticker/sticker.module';
import { FoodModule } from './food/food.module';
import { MoveGoalModule } from './move_goal/move_goal.module';
import { RestModule } from './rest/rest.module';
import { WinStatModule } from './win_stat/win_stat.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOption),
    UserModule,
    UserStatsModule,
    UserAbilityModule,
    UserRewardModule,
    RewardModule,
    FileModule,
    ExerciseStepModule,
    ExerciseModule,
    ArticleModule,
    StatModule,
    StickerModule,
    FoodModule,
    MoveGoalModule,
    RestModule,
    WinStatModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
