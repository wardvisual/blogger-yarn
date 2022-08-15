import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';

describe('UserService', () => {
  let service: UserService;

  const mockRepository = {
    find: jest
      .fn()
      .mockResolvedValue((value: User[]) => Promise.resolve(value)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: getRepositoryToken(User), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be fetch all the users', async () => {
    expect(await service.getUsers());
  });
});
