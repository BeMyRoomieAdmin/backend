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
    const numberOfUsersToSeed = 100;

    console.log(`🌱 Seeding ${numberOfUsersToSeed} users...`);

    const usersToCreate: CreateUserDto[] = Array.from(
      { length: numberOfUsersToSeed },
      () => {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();

        return {
          password: '123123aS',
          email: `${firstName.toLocaleLowerCase()}_${lastName.toLocaleLowerCase()}@example.com`,
          firstName: firstName.toLocaleLowerCase(),
          lastName: lastName.toLocaleLowerCase(),
          secondLastName: faker.person.lastName().toLocaleLowerCase(),
          phoneNumber: faker.helpers.arrayElement([
            `+34 6${faker.string.numeric(8)}`,
            `+34 7${faker.string.numeric(8)}`,
            `+34 8${faker.string.numeric(8)}`,
            `+34 9${faker.string.numeric(8)}`,
          ]),
          role: faker.helpers.arrayElement(
            Object.values(ValidRoles),
          ) as ValidRoles,
        };
      },
    );

    await userService.removeAll();
    console.log(`✅ Successfully removed all users.`);
    await userService.createMany(usersToCreate);

    console.log(`✅ Successfully seeded ${numberOfUsersToSeed} users.`);
  } catch (error) {
    console.error('❌ Error during seeding:', error);
  } finally {
    await app.close();
  }
}
