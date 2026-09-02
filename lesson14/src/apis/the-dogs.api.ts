import { CreatePetRequestDto, CreatePetResponseDto, ImageDto } from '../models';
import { IApiService } from '../services/i-api.service';
import * as fs from 'fs';

export class TheDogsApi {
    public constructor(private readonly apiService: IApiService<Response>) {}

    public async createPetAsync(params: CreatePetRequestDto): Promise<[Response, CreatePetResponseDto]> {
        const formData = new FormData();
        formData.append('name', params.name);
        formData.append('breed_id', params.breed_id.toString());
        formData.append('date_of_birth', params.date_of_birth);
        formData.append('sub_id', params.sub_id);
        formData.append('description', params.description);

        if (params.images) {
            params.images.forEach((image) => {
                const imageRaw = fs.readFileSync(image);
                const file = new File([new Uint8Array(imageRaw)], image, { type: 'image/jpeg' });

                // node 22.x
                // const binaryFile = new File([file], 'the_dog_1.jpg', { type: 'image/jpeg' });
                formData.append('images', file);
            });
        }

        const response = await this.apiService.postFormAsync('/pets', formData);
        const responseBody = await response.json() as CreatePetResponseDto;

        return [response, responseBody];
    }

    public async uploadPetImageAsync(petId: string, imagePaths: string[]): Promise<[Response, ImageDto[]]> {
        const formData = new FormData();

        imagePaths.forEach((image) => {
            const imageRaw = fs.readFileSync(image);
            const file = new File([new Uint8Array(imageRaw)], image, { type: 'image/jpeg' });

            formData.append('images', file);
        });

        const response = await this.apiService.postFormAsync(`/pets/${petId}/images`, formData);
        const responseBody = await response.json() as ImageDto[];

        return [response, responseBody];
    }

    public async getPetAsync(petId: string): Promise<[Response, CreatePetResponseDto]> {
        const response = await this.apiService.getAsync(`/pets/${petId}`);
        const responseBody = await response.json() as CreatePetResponseDto;

        return [response, responseBody];
    }
}
