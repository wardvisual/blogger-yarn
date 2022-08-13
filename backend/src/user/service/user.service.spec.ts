import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '@/user/service/user.service';
import { PrismaService } from '@/prisma/prisma.service';
import { UserController } from '../controller/user.controller';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      imports: [],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue({})
      .compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
