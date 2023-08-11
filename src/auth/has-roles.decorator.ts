import { SetMetadata } from '@nestjs/common';
import { Role } from '../schemas/user.schema';

export const HasRoles = (...roles: Role[]) => SetMetadata('roles', roles);
