import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersService } from './user.service';
import { User } from '../entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;

  const mockRepository = {
    find: jest
      .fn()
      .mockResolvedValue((value: User[]) => Promise.resolve(value)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getRepositoryToken(User), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be retrieved all the users', async () => {
    const users = await service.findAll();
    expect(users.length).not.toBe(0);
  });
});
