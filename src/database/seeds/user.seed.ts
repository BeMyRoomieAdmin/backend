import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';
import { UserService } from '../../user/user.service';
import { CreateUserDto } from '../../user/dto/create-user.dto';
import { faker } from '@faker-js/faker';
import { ValidRoles } from 'src/utils/enums/validRoles.enum';

export async function runSeed() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const userService = app.get(UserService);
    const numberOfUsersToSeed = 3;

    console.log(`🌱 Seeding ${numberOfUsersToSeed} users...`);

    const usersToCreate: CreateUserDto[] = Array.from(
      { length: numberOfUsersToSeed },
      () => ({
        password: '123123aS',
        email: faker.internet.email().toLowerCase(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        secondLastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        role: faker.helpers.arrayElement(
          Object.values(ValidRoles),
        ) as ValidRoles,
      }),
    );

    await userService.createMany(usersToCreate);

    console.log(`✅ Successfully seeded ${numberOfUsersToSeed} users.`);
  } catch (error) {
    console.error('❌ Error during seeding:', error);
  } finally {
    await app.close();
  }
}
