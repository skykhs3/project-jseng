import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST || "localhost",
      port: 3306,
      username: process.env.DB_USERNAME || "root",
      password: process.env.DB_PASSWORD || "your_password",
      database: process.env.DB_DATABASE || "some_db",
      synchronize: true,
      logging: false,
      entities: [
        "src/entity/**/*.ts"
      ],
      migrations: [
        "src/migration/**/*.ts"
      ],
      subscribers: [
        "src/subscriber/**/*.ts"
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
