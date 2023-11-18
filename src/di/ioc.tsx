import { createContainer, asFunction, asValue } from 'awilix';
import LoginViewModel from '../presentation/views/auth/login/ViewModel';
import RegisterViewModel from '../presentation/views/auth/register/ViewModel';
import SignOutViewModel from '../presentation/views/home/ViewModel';
import ProfileInfoViewModel from '../presentation/views/profile/info/ViewModel';
import * as AuthDataSource from '../data/datasource/remote/AuthRemoteDataSource';
import * as UsersDataSource from '../data/datasource/remote/UsersDataSource';
import * as PostDataSource from '../data/datasource/remote/PostDataSource';
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
import PostCreateViewModel from '../presentation/views/post/create/ViewModel';
import { PostRepository } from '../data/repository/PostRepository';
import { CreatePostUseCase } from '../domain/useCases/posts/CreatePostUseCase';
import { GetPostsUseCase } from '../domain/useCases/posts/GetPostsUseCase';
import PostListViewModel from '../presentation/views/post/list/ViewModel';

const container = createContainer();

container.register({
    LoginViewModel: asFunction(LoginViewModel),
    RegisterViewModel: asFunction(RegisterViewModel),
    SignOutViewModel: asFunction(SignOutViewModel),
    ProfileInfoViewModel: asFunction(ProfileInfoViewModel),
    ProfileUpdateViewModel: asFunction(ProfileUpdateViewModel),
    PostCreateViewModel: asFunction(PostCreateViewModel),
    PostListViewModel: asFunction(PostListViewModel),

    AuthDataSource: asValue(AuthDataSource),
    UsersDataSource: asValue(UsersDataSource),
    PostDataSource: asValue(PostDataSource),

    AuthRepository: asFunction(AuthRepository),
    UsersRepository: asFunction(UsersRepository),
    PostRepository: asFunction(PostRepository),

    LoginUseCase: asFunction(LoginUseCase),
    RegisterUseCase: asFunction(RegisterUseCase),
    SignOutUseCase: asFunction(SignOutUseCase),
    GetUserUseCase: asFunction(GetUserUseCase),
    GetUserByIdUseCase: asFunction(GetUserByIdUseCase),
    UpdateUserUseCase: asFunction(UpdateUserUseCase),
    UpdateWithImageUserUseCase: asFunction(UpdateWithImageUserUseCase),
    CreatePostUseCase: asFunction(CreatePostUseCase),
    GetPostsUseCase: asFunction(GetPostsUseCase)
});

export default container;