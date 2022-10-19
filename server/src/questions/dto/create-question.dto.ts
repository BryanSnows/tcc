import { ApiProperty } from "@nestjs/swagger"

export class CreateQuestionDto {
    @ApiProperty()
    question_description: string

    @ApiProperty()
    question_alternative: string

    @ApiProperty()
    correct_alternative: string

}
