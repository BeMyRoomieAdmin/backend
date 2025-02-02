import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HirerService } from './hirer.service';
import { CreateHirerDto } from './dto/create-hirer.dto';
import { UpdateHirerDto } from './dto/update-hirer.dto';

@Controller('hirer')
export class HirerController {
  constructor(private readonly hirerService: HirerService) {}

  @Post()
  create(@Body() createHirerDto: CreateHirerDto) {
    return this.hirerService.create(createHirerDto);
  }

  @Get()
  findAll() {
    return this.hirerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hirerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHirerDto: UpdateHirerDto) {
    return this.hirerService.update(+id, updateHirerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hirerService.remove(+id);
  }
}
