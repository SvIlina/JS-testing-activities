import { DbService } from '../src/code-samples/db.service';
import { UserService } from '../src/code-samples/user.service';
import { stubConstructor } from 'ts-sinon';
import { expect } from 'chai';
import { User } from '../src/code-samples/user.dto';
import { faker } from '@faker-js/faker';
import * as sinon from 'ts-sinon';

describe('User Service isolated tests', () => {
    let userService: UserService;
    const mockedDbConnection = stubConstructor(DbService);


    beforeEach(() => {
        userService = new UserService(mockedDbConnection);
    });

    afterEach(() => {
        mockedDbConnection.find.reset();
        mockedDbConnection.update.resetBehavior();
        mockedDbConnection.selectAll.reset();
        sinon.default.restore();
    });

    it('should find user by id', async () => {
        // arrange
        const expectedOutput: User = {
            id: 1,
            name: 'John Doe',
            age: 30
        };
        mockedDbConnection.find.resolves(expectedOutput);

        // act
        const user = await userService.find(1);

        // assert
        expect(user).to.deep.equal(expectedOutput);
    });

    it('should find user older than 30', async () => {
        // arrange
        const expectedAge = 30;
        const expectedOutput: User[] = [];
        for (let i = 0; i < 10; i++) {
            expectedOutput.push({
                id: faker.number.int({ min: 1, max: 100 }),
                name: faker.person.fullName(),
                age: faker.number.int({ min: 2, max: 80 })
            });
        }

        expectedOutput.push({
            id: faker.number.int({ min: 1, max: 100 }),
            name: faker.person.fullName(),
            age: expectedAge
        });

        mockedDbConnection.selectAll.resolves(expectedOutput);

        // act
        const user = await userService.findOlder(expectedAge);

        // assert
        const expectedUsers = expectedOutput.filter(userDto => userDto.age && userDto.age > expectedAge);
        expect(user).to.have.deep.members(expectedUsers);
    });

    it('test with spies', async () => {
        // arrange
        const expectedOutput: User = {
            id: 1,
            name: 'John Doe',
            age: 30
        };
        mockedDbConnection.update.resolves(expectedOutput);

        // act
        const user = await userService.update(1, expectedOutput);

        // assert
        expect(user).to.deep.equal(expectedOutput);
        expect(mockedDbConnection.update.calledOnce).to.be.true;
        expect(mockedDbConnection.update.firstCall.args[0]).to.equal(1);
        expect(mockedDbConnection.update.firstCall.args[1]).to.deep.equal(expectedOutput);
    });

    it('test spies using sinon.default.spy', async () => {
        // arrange
        const dbService = new DbService('fake-connection-string');
        const expectedOutput: User = {
            id: 1,
            name: 'John Doe',
            age: 30
        };
        const spy = sinon.default.spy(dbService, 'update');

        // act
        await dbService.update(1, expectedOutput);

        // assert
        expect(spy.calledOnce).to.be.true;
        expect(spy.firstCall.args[0]).to.equal(1);
        expect(spy.firstCall.args[1]).to.deep.equal(expectedOutput);
    });

    it('console.log spy test', async () => {
        // arrange
        const consoleLogSpy = sinon.default.spy(console, 'log');
        const dbService = new DbService('fake-connection-string');

        //act
        await dbService.update(1, { id: 1, name: 'John Doe', age: 30 });

        // assert
        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.firstCall.args[0]).to.equal('updating user with id=1 with the data {"id":1,"name":"John Doe","age":30}');
    });

    it('mocks private executeQuery', async () => {
        const expectedOutput: User[] = [
            { id: 1, name: 'John Doe', age: 30 }
        ];

        const executeQueryStub = sinon.default.stub(DbService.prototype as unknown as { executeQuery: <T>(query: string) => Promise<T> }, 'executeQuery')
            .resolves(expectedOutput);

        const dbService = new DbService('fake-connection-string');
        const users = await dbService.selectAll<User>();

        expect(users).to.deep.equal(expectedOutput);
        expect(executeQueryStub.calledOnceWith('SELECT * FROM table')).to.be.true;

        executeQueryStub.restore();
    });

});
