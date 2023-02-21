import { Module } from '@nestjs/common';
<<<<<<< HEAD

=======
import { AppController } from './app.controller';
import { AppService } from './app.service';
>>>>>>> 32a6a3b8b98a7277f8a12d1e89efe9f65790391b
import { ShoppingListModule } from './shopping_list/shopping_list.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ShoppingListModule],
<<<<<<< HEAD
=======
  controllers: [AppController],
  providers: [AppService],
>>>>>>> 32a6a3b8b98a7277f8a12d1e89efe9f65790391b
})
export class AppModule {}
