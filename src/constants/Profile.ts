import ViewDashboardOutline from 'u-vue/icons/ViewDashboardOutline.vue';
import AccountGroup from 'u-vue/icons/AccountGroup.vue';
import FormatListBulleted from 'u-vue/icons/FormatListBulleted.vue';
import PlusBoxMultiple from 'u-vue/icons/PlusBoxMultiple.vue';
import CartOutline from 'u-vue/icons/CartOutline.vue';

export const profileLinks = [
    {
        id: 1,
        name: 'Dashboard',
        link: '/',
        icon: ViewDashboardOutline,
    },
    {
        id: 2,
        name: 'Users',
        link: '/',
        icon: AccountGroup,
    },
    {
        id: 3,
        name: 'Products',
        link: '/products',
        icon: FormatListBulleted,
    },
    {
        id: 4,
        name: 'Add',
        link: '/add-product',
        icon: PlusBoxMultiple,
    },
    {
        id:5,
        name: 'Revenue',
        link: '/revenue',
        icon: CartOutline,
    },
]