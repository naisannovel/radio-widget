export interface ChildrenProps{
    children?: React.ReactNode;
}

export interface StationItem{
    _id: string;
    name: string;
    frequency: number;
}

export interface AuthFormData{
    name?: string;
    email?: string;
    password?: string | number
}

export interface StationFormData{
    name: string;
    frequency: number | null;
}

export interface SelectedStationForEdit{
    index: number;
    _id: string;
    name: string;
    frequency: number | string;
}

export interface InputProps{
    name: string;
    value?: string | number;
    placeholder: string;
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}