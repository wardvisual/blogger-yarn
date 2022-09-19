import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './user.controller';
import { UsersService } from '../service/user.service';
import { User } from '../entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('UsersController', () => {
  let controller: UsersController;

  const userMockService = {
    findAll: jest.fn().mockImplementation((dto) => dto),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      imports: [
        TypeOrmModule.forFeature([User]),
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '_admin_',
          database: 'blogdb',
          synchronize: true,
          entities: [User],
          autoLoadEntities: true,
        }),
      ],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(userMockService)
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should return all users ', async () => {
    const users = await controller.findAll();
    expect(users).not.toBe(0);
  });
});
