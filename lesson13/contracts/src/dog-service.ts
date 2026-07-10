import { ImageDto } from './models/image.dto';

export class DogService {
    private readonly apiKey: string = 'live_3XjO9hVo5IZl0vspCpkL8ZNmZNicUCvqI1bk6v4ipzCXjMaRmj2sSFNEQ2s4oeqK';
    public constructor(private baseUrl: string) {}

    public async getDogsImages(): Promise<ImageDto[]> {
        const response = await fetch(`${this.baseUrl}/images`, {headers: {'x-api-key': this.apiKey}});
        const responseJson = await response.json();

        return responseJson;
    }
}
