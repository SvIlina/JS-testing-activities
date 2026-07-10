import { MatchersV3, PactV4, SpecificationVersion, Verifier } from '@pact-foundation/pact';
import { ImageDto } from '../src/models/image.dto';
import { expect as expectChai } from 'chai';
import * as path from 'path';
import { DogService } from '../src/dog-service';

describe('Pact V4', () => {
    let imageService: DogService;
    // request api key here https://thecatapi.com/
    const xApiKey = 'live_3XjO9hVo5IZl0vspCpkL8ZNmZNicUCvqI1bk6v4ipzCXjMaRmj2sSFNEQ2s4oeqK';

    const provider = new PactV4({
        consumer: 'image-consumer-v4',
        provider: 'image-provider-v4',
        spec: SpecificationVersion.SPECIFICATION_VERSION_V4
    });

    const imageExample: Partial<ImageDto[]> = [
        {
            id: 'ohpJ-bcAA',
            url: 'https://cdn2.thedogapi.com/images/ohpJ-bcAA.jpg',
            width: 1500,
            height: 1000,
            breeds: [],
            categories: []
        } as unknown as ImageDto
    ];

    const expectedBody = MatchersV3.like(imageExample);

    describe('images pact v4', () => {
        it('return images', () => {
            provider
                .addInteraction()
                .given('images exist')
                .uponReceiving('a request to get images')
                .withRequest('GET', '/images', (builder) => {
                    builder.headers({
                        'x-api-key': xApiKey
                    });
                })
                .willRespondWith(200, (builder) => {
                    builder.headers({
                        'Content-Type': 'application/json'
                    });
                    builder.jsonBody(expectedBody);
                })
                .executeTest(async (mockServer) => {
                    // Act
                    imageService = new DogService(mockServer.url);
                    const response = await imageService.getDogsImages();
                    const filteredResponse = response.find((x) => x.id === (imageExample[0] as ImageDto)?.id) as ImageDto;

                    expectChai(filteredResponse).to.contain.keys('id', 'url', 'width', 'height', 'breeds', 'categories');
                    expectChai(filteredResponse.id).to.be.a('string');
                    expectChai(filteredResponse.url).to.be.a('string');
                    expectChai(filteredResponse.width).to.be.a('number');
                    expectChai(filteredResponse.height).to.be.a('number');
                    expectChai(filteredResponse.breeds).to.be.an('array');
                    expectChai(filteredResponse.categories).to.be.an('array');
                });
        });
    });

    describe('Pact V4 verification', () => {
        it('verify provider', () => {
            return new Verifier({
                providerBaseUrl: 'https://api.thedogapi.com/v1',
                pactUrls: [path.resolve(process.cwd(), './pacts/image-consumer-v4-image-provider-v4.json')]
            })
                .verifyProvider()
                .then(() => {
                    console.log('Pact Verification Complete!');
                });
        });
    });
});
