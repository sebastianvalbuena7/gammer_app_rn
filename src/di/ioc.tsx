import { createContainer, asFunction, asValue } from 'awilix';
import LoginViewModel from '../presentation/views/auth/login/ViewModel';
import RegisterViewModel from '../presentation/views/auth/register/ViewModel';
import SignOutViewModel from '../presentation/views/home/ViewModel';
import * as AuthDataSource from '../data/datasource/remote/AuthRemoteDataSource';
import { AuthRepository } from '../data/repository/AuthRepository';
import { LoginUseCase } from '../domain/useCases/auth/LoginUseCase';
import { RegisterUseCase } from '../domain/useCases/auth/RegisterUseCase';
import { SignOutUseCase } from '../domain/useCases/auth/SignOutUseCase';

const container = createContainer();

container.register({
    LoginViewModel: asFunction(LoginViewModel),
    RegisterViewModel: asFunction(RegisterViewModel),
    SignOutViewModel: asFunction(SignOutViewModel),
    AuthDataSource: asValue(AuthDataSource),
    AuthRepository: asFunction(AuthRepository),
    LoginUseCase: asFunction(LoginUseCase),
    RegisterUseCase: asFunction(RegisterUseCase),
    SignOutUseCase: asFunction(SignOutUseCase)
});

export default container;