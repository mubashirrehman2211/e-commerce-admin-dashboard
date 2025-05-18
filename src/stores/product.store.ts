import {defineStore} from 'pinia'
import {useStorage} from '@vueuse/core';
import {createToast} from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export const useProductStore = defineStore('product', {
    state: () => ({
        searchQuery: '',
        selectedCategory: 'All',
        sortOption: 'name',
        newItem: null,
        products: useStorage('products', [
            {
                id: 1,
                image: './product/wireless-headphones.jpg',
                name: "Wireless Headphones",
                stock: 45,
                price: 99.99,
                created_at: "2023-01-15T08:30:00Z",
                category: "Electronics"
            },
            {
                id: 2,
                image: './product/bluetooth-speaker.jpg',
                name: "Bluetooth Speaker",
                stock: 30,
                price: 59.95,
                created_at: "2023-02-20T10:15:00Z",
                category: "Electronics"
            },
            {
                id: 3,
                image: './product/stainless-steel-water-bottle.jpg',
                name: "Stainless Steel Water Bottle",
                stock: 75,
                price: 19.99,
                created_at: "2023-03-12T14:20:00Z",
                category: "Home"
            },
            {
                id: 4,
                image: './product/running-shoes.jpg',
                name: "Running Shoes",
                stock: 50,
                price: 89.99,
                created_at: "2023-04-01T11:10:00Z",
                category: "Footwear"
            },
            {
                id: 5,
                image: './product/coffee-maker.jpg',
                name: "Coffee Maker",
                stock: 20,
                price: 79.99,
                created_at: "2023-05-22T12:05:00Z",
                category: "Home"
            },
            {
                id: 6,
                image: './product/backpack.jpg',
                name: "Backpack",
                stock: 40,
                price: 49.99,
                created_at: "2023-06-07T10:50:00Z",
                category: "Accessories"
            },
            {
                id: 7,
                image: './product/desk-lamp.jpg',
                name: "Desk Lamp",
                stock: 35,
                price: 34.99,
                created_at: "2023-06-15T15:30:00Z",
                category: "Home"
            },
            {
                id: 8,
                image: './product/wireless-mouse.jpg',
                name: "Wireless Mouse",
                stock: 5,
                price: 24.99,
                created_at: "2023-07-03T09:20:00Z",
                category: "Electronics"
            },
            {
                id: 9,
                image: './product/sunglasses.jpg',
                name: "Sunglasses",
                stock: 65,
                price: 39.99,
                created_at: "2023-07-19T14:15:00Z",
                category: "Accessories"
            },
            {
                id: 10,
                image: './product/notebook.jpg',
                name: "Notebook",
                stock: 0,
                price: 9.99,
                created_at: "2023-08-05T11:45:00Z",
                category: "Stationery"
            },
            {
                id: 11,
                image: './product/fitness-tracker.jpg',
                name: "Fitness Tracker",
                stock: 40,
                price: 79.99,
                created_at: "2023-10-12T08:15:00Z",
                category: "Fitness"
            },
            {
                id: 12,
                image: './product/winter-jacket.jpg',
                name: "Winter Jacket",
                stock: 25,
                price: 129.99,
                created_at: "2023-10-28T14:40:00Z",
                category: "Clothing"
            },
            {
                id: 13,
                image: './product/ceramic-mug.jpg',
                name: "Ceramic Mug",
                stock: 90,
                price: 12.99,
                created_at: "2023-12-01T09:10:00Z",
                category: "Home"
            }]),
    }),

    getters: {
        filteredProducts(state) {
            let result = [...state.products]

            if (state.selectedCategory !== 'All') {
                result = result.filter(p => p.category === state.selectedCategory)
            }

            if (state.searchQuery.trim()) {
                result = result.filter(p =>
                    p.name.toLowerCase().includes(state.searchQuery.toLowerCase())
                )
            }

            if (state.sortOption === 'name') {
                result.sort((a, b) => a.name.localeCompare(b.name))
            } else if (state.sortOption === 'stock') {
                result.sort((a, b) => b.stock - a.stock)
            }

            return result
        },

        lowInventory(state) {
            return state.products.filter(product => product.stock <= 5)
        },

        recentProduct(state) {
            return [...state.products].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 5)
        }
    },

    actions: {
        updateStock(id, type) {
            const product = this.products.find(p => p.id === id);
            if (product) {
                switch (type) {
                    case 'increase':
                        product.stock += 1;
                        break;
                    case 'decrease':
                        if (product.stock > 0) product.stock -= 1;
                        break;
                }
            }
        },

        addProduct(product, router) {
            const newProduct = {
                ...product,
                id: this.products.length + 1,
                created_at: new Date()
            }

            this.products.push(newProduct)

            router.push('/products')

            createToast('Product added', {
                type: 'success',
                transition: 'slide',
                position: 'top-center',
                showIcon: 'true',
                hideProgressBar: 'true',
            })
        },
    }
})
