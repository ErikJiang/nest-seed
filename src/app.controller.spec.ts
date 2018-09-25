import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello! Nest Seed!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.root()).toBe('Hello! Nest Seed!');
    });
  });
});
