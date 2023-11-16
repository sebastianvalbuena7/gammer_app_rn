import { createContainer, asFunction, asValue } from 'awilix';
import LoginViewModel from '../presentation/views/auth/login/ViewModel';
import RegisterViewModel from '../presentation/views/auth/register/ViewModel';
import SignOutViewModel from '../presentation/views/home/ViewModel';
import ProfileInfoViewModel from '../presentation/views/profile/info/ViewModel';
import * as AuthDataSource from '../data/datasource/remote/AuthRemoteDataSource';
import * as UsersDataSource from '../data/datasource/remote/UsersDataSource';
import { AuthRepository } from '../data/repository/AuthRepository';
import { UsersRepository } from '../data/repository/UsersRepository';
import { LoginUseCase } from '../domain/useCases/auth/LoginUseCase';
import { RegisterUseCase } from '../domain/useCases/auth/RegisterUseCase';
import { SignOutUseCase } from '../domain/useCases/auth/SignOutUseCase';
import { GetUserUseCase } from '../domain/useCases/auth/GetUserUseCase';
import { GetUserByIdUseCase } from '../domain/useCases/users/GetUserByIdUseCase';
import ProfileUpdateViewModel from '../presentation/views/profile/update/ViewModel';
import { UpdateUserUseCase } from '../domain/useCases/users/UpdateUserUseCase';
import { UpdateWithImageUserUseCase } from '../domain/useCases/users/UpdateWithImageUserUseCase';

const container = createContainer();

container.register({
    LoginViewModel: asFunction(LoginViewModel),
    RegisterViewModel: asFunction(RegisterViewModel),
    SignOutViewModel: asFunction(SignOutViewModel),
    ProfileInfoViewModel: asFunction(ProfileInfoViewModel),
    ProfileUpdateViewModel: asFunction(ProfileUpdateViewModel),

    AuthDataSource: asValue(AuthDataSource),
    UsersDataSource: asValue(UsersDataSource),

    AuthRepository: asFunction(AuthRepository),
    UsersRepository: asFunction(UsersRepository),
    
    LoginUseCase: asFunction(LoginUseCase),
    RegisterUseCase: asFunction(RegisterUseCase),
    SignOutUseCase: asFunction(SignOutUseCase),
    GetUserUseCase: asFunction(GetUserUseCase),
    GetUserByIdUseCase: asFunction(GetUserByIdUseCase),
    UpdateUserUseCase: asFunction(UpdateUserUseCase),
    UpdateWithImageUserUseCase: asFunction(UpdateWithImageUserUseCase)
});

export default container;