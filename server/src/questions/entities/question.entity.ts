import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('QUESTION')
export class QuestionEntity { 
    @PrimaryGeneratedColumn()
    question_id: number

    @Column()
    question_description: string

    @Column()
    question_alternative: string

    @Column()
    correct_alternative: string
}
