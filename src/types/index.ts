export interface Order {
    date: string
    month: string
    year: string
    category: string
    revenue: number
    orders: number
}

export interface Product {
    id: number
    name: string
    price: number
    image?: string
    stock?: number
    created_at: Date
}