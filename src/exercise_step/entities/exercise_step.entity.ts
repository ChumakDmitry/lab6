import { Exercise } from "src/exercise/entities/exercise.entity";
import { File } from "src/file/entities/file.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ExerciseStep {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  text: string

  @ManyToOne(() => Exercise, (exercise) => exercise.exerciseStep)
  exercise: Exercise[]

  @ManyToOne(() => File, (file) => file.exerciseStep)
  file: File
}
