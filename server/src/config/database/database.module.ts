import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DatabaseService } from "./databse.service";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: DatabaseService
        })
    ]
})
export class DatabaseModule {}