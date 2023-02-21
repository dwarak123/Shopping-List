import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ShoppingListService } from './shopping_list.service';
import { CreateShoppingListDto } from './dto/create-shopping_list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping_list.dto';
import { Response } from 'express';

@Controller('shopping-list')
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  @Post('create')
  async create(
    @Body() createShoppingListDto: CreateShoppingListDto,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.CREATED).json({
      message: await this.shoppingListService.create(createShoppingListDto),
    });
  }

  @Get('all')
  async findAll(@Res() res: Response) {
    return res
      .status(HttpStatus.OK)
      .json({ message: await this.shoppingListService.findAll() });
  }

  /*@Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    return res
      .status(HttpStatus.OK)
      .json({ message: await this.shoppingListService.findOne(id) });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateShoppingListDto: UpdateShoppingListDto,
    @Res() res: Response,
  ) {
    await this.shoppingListService.update(
      id,
      updateShoppingListDto,
    );
    return res.status(HttpStatus.ACCEPTED).json({
      message: "Updated",
    });
  }

  @Delete('one/:id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    return res
      .status(HttpStatus.ACCEPTED)
      .json({ message: await this.shoppingListService.remove(id) });
  }

  @Delete('deleteAll')
  async removeAll(@Res() res: Response){
    return res.status(HttpStatus.ACCEPTED).json({message: await this.shoppingListService.removeAll()});
  }*/
}
