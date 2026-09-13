import { Body, Controller, Delete, Get, Param, Patch, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // Create an instance of usersService
  constructor(private readonly usersService: UsersService) {}

  // GET /users
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }
  // GET /users/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }
  // @Param('intern') intern: string
  // POST /users
  @Post()
  createUser(@Body() user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
    return this.usersService.create(user);
  }
  // PATCH /users/:id
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updatedUser: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
    return this.usersService.update(id, updatedUser);
  }
  // DELETE /users/:id
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}