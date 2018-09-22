export interface Hotel {
    id: number,
    title: string,
    address: string,
    description: string,
    phone: string,
    picture: string,
    photos: string[],
    weather: Weather,
    profile: Profile,
    stars: number;
}


export type Weather = {
    temperature: number,
    wind: number,
    icon: 'rain' | 'cloud' | 'sun';
}

export type Profile = {
    followers: number,
    following: number,
    photo: string;
}

