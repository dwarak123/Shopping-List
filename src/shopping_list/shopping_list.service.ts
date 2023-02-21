import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateShoppingListDto, shoppingDocument } from './dto/create-shopping_list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping_list.dto';

@Injectable()
export class ShoppingListService {
  constructor(/*@InjectModel(CreateShoppingListDto.name) private model: Model<shoppingDocument>*/) {}

  async create(createShoppingListDto: CreateShoppingListDto,): Promise<CreateShoppingListDto> {
    //const result = new this.model(createShoppingListDto);
    return createShoppingListDto;
  }

  async findAll(){
    return 'need to do more work on this application';
  }

  /*async findOne(id: string): Promise<CreateShoppingListDto> {
    return this.model.findById(id);
  }

  async update(id: string, updateShoppingListDto: UpdateShoppingListDto) {
    return this.model.findByIdAndUpdate(id, updateShoppingListDto);;
  }

  async remove(id: string) {
    return this.model.deleteOne({_id: id});
  }

  async removeAll(){
    return this.model.deleteMany();
  }*/
}
