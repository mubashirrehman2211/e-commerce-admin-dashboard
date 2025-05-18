import { defineStore } from 'pinia'
import { sales } from '../constants/Sales.ts'

interface Order {
    id: string
    date: string
    month: string
    year: string
    category: string
    revenue: number
    orders: number
}

export const useRevenueStore = defineStore('revenue', {
    state: () => ({
        selectedCategory: 'All' as string,
        selectedPeriod: 'monthly' as 'daily' | 'monthly' | 'yearly',
    }),

    getters: {
        filteredOrders(state): Order[] {
            if (state.selectedCategory === 'All') return sales
            return sales.filter((order: Order) => order.category === state.selectedCategory)
        },

        totalRevenue(state): number {
            const orders = this.filteredOrders
            const period = state.selectedPeriod

            switch (period) {
                case 'daily':
                    return this.sumRevenue(orders)

                case 'monthly': {
                    const grouped = this.groupBy(orders, 'month', 'year')
                    return Object.values(grouped).reduce((total: number, group: Order[]) => total + this.sumRevenue(group), 0)
                }

                case 'yearly': {
                    const grouped = this.groupBy(orders, 'year')
                    return Object.values(grouped).reduce((total: number, group: Order[]) => total + this.sumRevenue(group), 0)
                }

                default:
                    return 0
            }
        },

        totalOrders(state): number {
            const orders = this.filteredOrders
            const period = state.selectedPeriod

            switch (period) {
                case 'daily':
                    return orders.reduce((sum: number, item: Order) => sum + item.orders, 0)

                case 'monthly': {
                    const grouped = this.groupBy(orders, 'month', 'year')
                    return Object.values(grouped).reduce(
                        (sum: number, group: Order[]) => sum + group.reduce((s: number, o: Order) => s + o.orders, 0),
                        0
                    )
                }

                case 'yearly': {
                    const grouped = this.groupBy(orders, 'year')
                    return Object.values(grouped).reduce(
                        (sum: number, group: Order[]) => sum + group.reduce((s: number, o: Order) => s + o.orders, 0),
                        0
                    )
                }

                default:
                    return 0
            }
        },

        chartData(state): { labels: string[]; datasets: any[] } {
            const dataMap: Record<string, number> = {}
            let labels: string[] = []

            const orders = this.filteredOrders

            if (state.selectedPeriod === 'daily') {
                orders.forEach((order: Order) => {
                    const label = order.date
                    dataMap[label] = (dataMap[label] || 0) + order.revenue
                })
                labels = Object.keys(dataMap).sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
            }
            else if (state.selectedPeriod === 'monthly') {
                orders.forEach((order: Order) => {
                    const label = `${order.month}-${order.year}`
                    dataMap[label] = (dataMap[label] || 0) + order.revenue
                })

                labels = Object.keys(dataMap).sort((a, b) => {
                    const [monthA, yearA] = a.split('-')
                    const [monthB, yearB] = b.split('-')
                    return new Date(`${monthA} 1, ${yearA}`).getTime() - new Date(`${monthB} 1, ${yearB}`).getTime()
                })
            }
            else if (state.selectedPeriod === 'yearly') {
                orders.forEach((order: Order) => {
                    const label = order.year
                    dataMap[label] = (dataMap[label] || 0) + order.revenue
                })
                labels = Object.keys(dataMap).sort((a, b) => +a - +b)
            }

            const revenues = labels.map(label => dataMap[label])

            return {
                labels,
                datasets: [
                    {
                        label: 'Revenue',
                        data: revenues,
                        borderColor: '#22c55e',
                        fill: false,
                        tension: 0.3
                    }
                ]
            }
        },
    },

    actions: {
        sumRevenue(orders: Order[]): number {
            return orders.reduce((sum: number, order: Order) => sum + order.revenue, 0)
        },

        groupBy<K extends keyof Order>(data: Order[], ...keys: K[]): Record<string, Order[]> {
            return data.reduce((result: Record<string, Order[]>, item: Order) => {
                const groupKey = keys.map(key => item[key]).join('-')
                if (!result[groupKey]) result[groupKey] = []
                result[groupKey].push(item)
                return result
            }, {})
        }
    }
})