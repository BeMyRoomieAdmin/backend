import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  Request,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { MongoIdPipe } from 'src/utils/pipes/mongo-id.pipe';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ValidRoles } from 'src/auth/interfaces/valid-roles.interface';
import { UserRequest } from 'src/shared/interfaces/user-request.interface';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Auth(ValidRoles.tenant)
  @Post()
  create(@Body() createRoomDto: CreateRoomDto, @Request() req: UserRequest) {
    return this.roomService.create(createRoomDto, req.user);
  }

  @Get()
  findAll() {
    return this.roomService.findAll();
  }

  @Auth(ValidRoles.tenant)
  @Get('my-rooms')
  findMyRooms(@Request() req: UserRequest) {
    return this.roomService.findMyRooms(req.user);
  }

  @Get('home')
  findAllHome() {
    return this.roomService.findAllHome();
  }

  @Get(':id')
  async findOne(@Param('id', MongoIdPipe) id: string) {
    const room = await this.roomService.findOne(id);

    if (!room) {
      throw new NotFoundException('Room not found');
    }

    return room;
  }

  @Patch(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateRoomDto: UpdateRoomDto,
  ) {
    return this.roomService.update(id, updateRoomDto);
  }

  @Auth(ValidRoles.tenant)
  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string, @Request() req: UserRequest) {
    return this.roomService.remove(id, req.user);
  }
}
