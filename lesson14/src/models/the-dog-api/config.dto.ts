export interface ConfigDto {
    auth: AuthConfigDto;
    api: ApiConfigDto;
}

export interface AuthConfigDto {
    theDogApi: TheDogApiAuthConfigDto;
}

export interface TheDogApiAuthConfigDto {
    apiKey: string;
}

export interface ApiConfigDto {
    theDogApi: ApiConfig;
}

interface ApiConfig {
    baseUrl: string;
}
