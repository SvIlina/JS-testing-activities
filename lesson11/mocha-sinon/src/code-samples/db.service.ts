abstract class database {
    public static async query<T>(query: string): Promise<T> {
        return Promise.resolve({ result: `Executed: ${query}` } as T);
    }
}

export class DbService {

    public constructor(private readonly connectionString: string) {}

    public async find<T>(id: number): Promise<T> {
        return await database.query(`SELECT * FROM table WHERE id = ${id}`);
    }

    public async update<T>(id: number, data: T): Promise<T> {
        console.log(`updating user with id=${id} with the data ${JSON.stringify(data)}`);
        return await database.query(`UPDATE table SET id = ${id}`) as T;
    }

    public async selectAll<T>(): Promise<T[]> {
        return this.executeQuery<T[]>('SELECT * FROM table');
    }

    private async executeQuery<T>(query: string): Promise<T> {
        return await database.query(query);
    }
}
