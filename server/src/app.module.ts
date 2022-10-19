import { Module } from '@nestjs/common';
import { ConfigModule } from './config/environments/config.module';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database/database.module';
import { SwaggerModule } from './config/swagger/swagger.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [QuestionsModule,
    SwaggerModule,
    ConfigModule,
    DatabaseModule
  ],
  providers: [AppService],
})
export class AppModule {}
