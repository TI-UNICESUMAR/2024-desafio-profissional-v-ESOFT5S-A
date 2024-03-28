import bcrypt from 'bcrypt';

export class Password {

    private static readonly saltRounds = 10;

    static async generateHash(password: string): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    } 

    static async compare(password: string, hashPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashPassword);
    }

}