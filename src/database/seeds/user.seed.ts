import { NestFactory } from '@nestjs/core';
import { faker } from '@faker-js/faker';
import { AppModule } from '../../app.module';
import { CreateUserDto } from '../../user/dto/create-user.dto';
import { UserService } from '../../user/user.service';
import { ValidRoles } from 'src/utils/enums/validRoles.enum';
import { BcryptService } from 'src/shared/services/bcrypt.service';
import { ConfigService } from '@nestjs/config';

export async function runSeed() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const configService = app.get(ConfigService);
    const userService = app.get(UserService);
    const bcryptService = app.get(BcryptService);
    const numberOfUsersToSeed = 5;

    const password = configService.get<string>('PASSWORD');
    const hashedPassword: string = await bcryptService.encryptPassword(
      password!,
    );

    console.log(`🌱 Seeding ${numberOfUsersToSeed} users...`);

    const usersToCreate: CreateUserDto[] = Array.from(
      { length: numberOfUsersToSeed },
      () => {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();

        return {
          password: hashedPassword,
          email: `${firstName.toLocaleLowerCase()}_${lastName.toLocaleLowerCase()}@mail.com`,
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
          isActive: true,
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
