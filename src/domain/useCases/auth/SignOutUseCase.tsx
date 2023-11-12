import { AuthRepository } from '../../../data/repository/AuthRepository';

export interface SignOutUseCase {
    run(): Promise<{
        error: any;
        result: boolean | null;
    }>;
}

export const SignOutUseCase = ({ AuthRepository }: { AuthRepository: AuthRepository }) => {
    return {
        async run() {
            const { error, result } = await AuthRepository.signOut();

            return { error, result };
        }
    }
}