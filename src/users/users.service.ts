import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "sincere@april.biz",
      "role": "INTERN",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "shanna@melissa.tv",
      "role": "INTERN",
    },
    {
      "id": 3,
      "name": "Patricia Lebsack",
      "email": "julianne.oconner@kory.org",
      "role": "ENGINEER",
    },
    {
      "id": 4,
      "name": "Clementine Bauch",
      "email": "nathan@yesenia.net",
      "role": "ENGINEER",
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "lucio_hettinger@annie.ca",
      "role": "ADMIN",
    },
  ]

  // fetch all users or fetch by role
  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter(user => user.role === role);
    }
    return this.users
  }
  // fetch a single user by id
  findOne(id: number) {
    const user =  this.users.find(user => user.id === id);
    return user;
  }
  // create a new user
  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto
    }
    this.users.push(newUser)
    return newUser
  }
  // update a user detail
  update(id: number, updatUserDto: UpdateUserDto) {
    this.users = this.users.map(user => {
      if (user.id === id) {
        return {...user, ...updatUserDto }
      }
      return user
    })
    return this.findOne(id);
  }
  // delete user
  delete(id: number) {
    const  removedUser = this.findOne(id);
    this.users = this.users.filter(user => user.id !== id);
    return removedUser;
  }
}