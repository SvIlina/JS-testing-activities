import { describe, expect, it } from 'vitest';
import { ConfigService } from '../src/services/config.service';
import { FetchApiService } from '../src/services/fetch-api.service';
import { TheDogsApi } from '../src/apis/the-dogs.api';

import {expect as expectChai} from 'chai';


describe('The Dogs API tests. Pets endpoints', () => {
    const config = new ConfigService().getConfig();
    const theDogApiService = new FetchApiService(config.api.theDogApi.baseUrl, config.auth.theDogApi);
    const theDogsApi = new TheDogsApi(theDogApiService);

    let petId: string;
    let imageId: string;

    it('Create pet', async () => {
        const createPetRequestDto = {
            name: 'Test Dog',
            breed_id: 1,
            date_of_birth: '2020-01-01',
            sub_id: 'test_sub_id',
            description: 'Test description'
        };
        const [response, responseBody] = await theDogsApi.createPetAsync(createPetRequestDto);

        expect(response.status).toBe(201);

        expectChai(responseBody).to.have.property('id').and.to.be.a('string');
        expectChai(responseBody).to.have.property('name', createPetRequestDto.name);
        expectChai(responseBody).to.have.property('breed_id', createPetRequestDto.breed_id.toString());
        expectChai(responseBody).to.have.property('date_of_birth', createPetRequestDto.date_of_birth);
        expectChai(responseBody).to.have.property('sub_id', createPetRequestDto.sub_id);
        expectChai(responseBody).to.have.property('description', createPetRequestDto.description);
        expectChai(responseBody).to.have.property('images').and.to.be.an('array').and.to.have.lengthOf(0);
        expectChai(responseBody).to.have.property('created_at').and.to.be.a('string');
        expectChai(responseBody).to.have.property('updated_at').and.to.be.a('string');
        petId = responseBody.id;
    });

    it('upload pet image to existing pet', async () => {
        const imagePaths = ['./artifactory/the_dog_1.jpg'];
        const [response, responseBody] = await theDogsApi.uploadPetImageAsync(petId, imagePaths);

        expect(response.status).toBe(201);

        expectChai(responseBody).to.be.an('array').and.to.have.lengthOf(1);

        const imageDto = responseBody[0];
        expectChai(imageDto).to.have.property('id').and.to.be.a('string');
        expectChai(imageDto).to.have.property('url').and.to.be.a('string');
        expectChai(imageDto).to.have.property('created_at').and.to.be.a('string');
        expectChai(imageDto).to.have.property('pet_id', petId);
        expectChai(imageDto).to.have.property('width').and.to.be.a('number');
        expectChai(imageDto).to.have.property('height').and.to.be.a('number');
        imageId = imageDto.id;
    });

    it('get pet with uploaded image', async () => {
        const [response, responseBody] = await theDogsApi.getPetAsync(petId);
        expect(response.status).toBe(200);

        expectChai(responseBody).to.have.property('id', petId);
        expectChai(responseBody).to.have.property('images').and.to.be.an('array').and.to.have.lengthOf(1);

        const imageDto = responseBody.images[0];
        expectChai(imageDto).to.have.property('id', imageId);
        expectChai(imageDto).to.have.property('url').and.to.be.a('string');
        expectChai(imageDto).to.have.property('created_at').and.to.be.a('string');
        expectChai(imageDto).to.have.property('pet_id', petId);
        expectChai(imageDto).to.have.property('width').and.to.be.a('number');
        expectChai(imageDto).to.have.property('height').and.to.be.a('number');
    });
});
