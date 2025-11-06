export const APIConfig = {
    BASE_URL : 'https://dummyjson.com',
    BASE_URL_TAMKEEN : 'https://tamkeen-dev.com/api',
    ENDPOINTS: {
        PRODUCTS: '/products',
        SEARCH_PRODUCT: '/products/search',
        CATEGORIRES: '/products/category-list',
        PRODUCTS_CATEGORIRES: '/products/categories',
        PRODUCTS_BY_CATEGORIRES: (cate)=>`/products/category/${cate}`,
        PRODUCT_BY_ID: (id)=>`/products/${id}`
    },
    ENDPOINTS_TAMKEEN:{
        USER: '/user'
    }
}