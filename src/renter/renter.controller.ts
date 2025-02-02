import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RenterService } from './renter.service';
import { CreateRenterDto } from './dto/create-renter.dto';
import { UpdateRenterDto } from './dto/update-renter.dto';

@Controller('renter')
export class RenterController {
  constructor(private readonly renterService: RenterService) {}

  @Post()
  create(@Body() createRenterDto: CreateRenterDto) {
    return this.renterService.create(createRenterDto);
  }

  @Get()
  findAll() {
    return this.renterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.renterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRenterDto: UpdateRenterDto) {
    return this.renterService.update(+id, updateRenterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.renterService.remove(+id);
  }
}
