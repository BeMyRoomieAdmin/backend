import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  async seedDatabase() {
    try {
      await this.seedService.seedDatabase();
      return { message: 'Seed completado.' };
    } catch (error) {
      console.error('Error al ejecutar el seed:', error);
      return { error: 'Ocurrió un error al ejecutar el seed.' };
    }
  }
}
