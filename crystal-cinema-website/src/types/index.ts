// This file exports TypeScript types and interfaces used throughout the project.

export interface Service {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    projectUrl: string;
    imageUrl: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}