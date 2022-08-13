import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../service/user.service';

describe('UserController', () => {
  let controller: UserController;

  const userMockService = {
    create: jest.fn((dto) => {
      return { id: Date.now(), ...dto };
    }),
    findAll: jest.fn((dto) => {
      return { ...dto };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      imports: [],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(userMockService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', () => {
    expect(controller.create({ username: 'ward', password: 'pass' })).toEqual({
      id: expect.any(Number),
      username: 'ward',
      password: 'pass',
    });
  });

  it('should return list of users', () => {
    expect(controller.findAll()).toBeDefined();
  });
});
