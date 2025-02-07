import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';
import { runSeed as runUserSeed } from './user.seed';
import * as mongoose from 'mongoose';

async function runMainSeed() {
  const app = await NestFactory.createApplicationContext(AppModule);

  console.log('🚀 Starting main seed script...');

  try {
    console.log('➡️  Running User Seed...');
    await runUserSeed();
    console.log('✅ User Seed completed.');
  } catch (error) {
    console.error('❌ Error during main seeding:', error);
  } finally {
    await app.close();
    await mongoose.disconnect();
  }

  console.log('🌱 Main seed script completed.');
}

runMainSeed().catch((error) => {
  console.error('❌ Main seed script failed:', error);
  process.exit(1);
});
