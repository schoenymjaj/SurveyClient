export interface Assessment {
    id: number;
    name: string;
    shortName?: string,
    description?: string,
    category: string,
    type: string;
    typeOrder?: number;
    tags: string[];
    active?: boolean;
    dateCreated?: Date;
    dateUpdated?: Date;
}

export interface filterToggleButtonsType {
    hazard: boolean;
    vulnerability: boolean;
    consequence: boolean
}