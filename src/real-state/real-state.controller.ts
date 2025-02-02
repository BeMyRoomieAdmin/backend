import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RealStateService } from './real-state.service';
import { CreateRealStateDto } from './dto/create-real-state.dto';
import { UpdateRealStateDto } from './dto/update-real-state.dto';

@Controller('real-state')
export class RealStateController {
  constructor(private readonly realStateService: RealStateService) {}

  @Post()
  create(@Body() createRealStateDto: CreateRealStateDto) {
    return this.realStateService.create(createRealStateDto);
  }

  @Get()
  findAll() {
    return this.realStateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.realStateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRealStateDto: UpdateRealStateDto) {
    return this.realStateService.update(+id, updateRealStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.realStateService.remove(+id);
  }
}
