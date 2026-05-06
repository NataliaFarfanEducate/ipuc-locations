export interface Church {
    id: number;
    name: string;
    location: {
        latitude: number;
        longitude: number;
    };
    address: string;
    description: string;
}

export type ChurchList = Church[];