import { Article } from "src/article/entities/article.entity";
import { ExerciseStep } from "src/exercise_step/entities/exercise_step.entity";
import { Reward } from "src/reward/entities/reward.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class File {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  size: number

  @Column()
  path: string

  @Column()
  bucket: string

  @Column()
  mime: string

  @OneToMany(() => ExerciseStep, (exerciseStep) => exerciseStep.file)
  exerciseStep: ExerciseStep[]

  @OneToMany(() => Article, (article) => article.file)
  article: Article[]

  @OneToMany(() => Reward, (reward) => reward.file)
  reward: Reward[]
}
