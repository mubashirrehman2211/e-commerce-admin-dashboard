import {createWebHistory, createRouter} from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';
import InventoryPage from '../pages/InventoryPage.vue';
import AddProduct from '../pages/AddProduct.vue';
import RevenueAnalysis from '../pages/RevenueAnalysis.vue';

const routes = [
    {path: '/', name: 'dashboard', component: Dashboard},
    {path: '/products', name: 'product', component: InventoryPage},
    {path: '/add-product', name: 'addProduct', component: AddProduct},
    {path: '/revenue', name: 'revenue', component: RevenueAnalysis},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
