import { MatchersV3, PactV3, Verifier } from '@pact-foundation/pact';
import { ImageDto } from '../src/models/image.dto';
import { expect } from 'chai';
import * as path from 'path';
import { DogService } from '../src/dog-service';

describe('the dogs api contract tests /images', () => {
    let dogService: DogService;
    const apiKey = 'live_3XjO9hVo5IZl0vspCpkL8ZNmZNicUCvqI1bk6v4ipzCXjMaRmj2sSFNEQ2s4oeqK';

    const provider = new PactV3({
        consumer: 'dogs-consumer',
        provider: 'dogs-provider'
    });

    const expectedResponse = [
        {
            id: 'ohpJ-bcAA',
            url: 'https://cdn2.thedogapi.com/images/ohpJ-bcAA.jpg',
            width: 1500,
            height: 1000,
            breeds: [],
            categories: []
        }
    ] as unknown as ImageDto[];

    const expectedBody = MatchersV3.like(expectedResponse);

    describe('consumer test', () => {
        it('create contract', () => {
            provider
                .given('dogs exist')
                .uponReceiving('a request for dogs')
                .withRequest({
                    method: 'GET',
                    path: '/images',
                    headers: {
                        'x-api-key': apiKey,
                        accept: '*/*'
                    }
                })
                .willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: expectedBody
                });

            return provider.executeTest(async (mockServer) => {
                dogService = new DogService(mockServer.url);
                const images = await dogService.getDogsImages();

                expect(images[0]).to.contain.keys(
                    'id',
                    'url',
                    'width',
                    'height',
                    'breeds',
                    'categories'
                );
                expect(images[0].id).to.be.a('string');
                expect(images[0].url).to.be.a('string');
                expect(images[0].width).to.be.a('number');
                expect(images[0].height).to.be.a('number');
                expect(images[0].breeds).to.be.an('array');
                expect(images[0].categories).to.be.an('array');
            });
        });
    });

    describe('provider test', () => {
        it('verify contract', () => {
            return new Verifier({
                providerBaseUrl: 'https://api.thedogapi.com/v1',
                pactUrls: [path.resolve(process.cwd(), 'pacts', 'dogs-consumer-dogs-provider.json')]
            })
                .verifyProvider()
                .then(() => {
                    console.log('contract verified');
                });
        });
    });
});
