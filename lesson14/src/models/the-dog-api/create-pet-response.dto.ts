export interface CreatePetResponseDto {
    id: string;
    name: string;
    breed_id: string;
    species_id: string;
    description: string;
    sub_id: string;
    date_of_birth: string;
    muscle_wasting_risk: null;
    images: unknown[];
    created_at: string;
    updated_at: string;
}
