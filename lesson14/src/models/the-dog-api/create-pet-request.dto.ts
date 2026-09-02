export interface CreatePetRequestDto {
    name: string;
    breed_id: number;
    date_of_birth: string;
    sub_id: string;
    description: string;
    images?: string[];
}
