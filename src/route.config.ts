/**
 * 注意：component属性指向的路径为src/pages
 * 其余(Routes等)为前端文件文件所在路径
 */
const exceptionRoutes = ({ route = '' }) => {
    return [
        {
            path: route + '/400', //系统无权限
            component: '@/pages/routes/error/400.tsx',
            type: 'system_no_auth',
        },
        {
            path: route + '/403',//模块或者页面无进入权限
            component: '@/pages/routes/error/403.tsx',
            type: 'no_auth'
        },

        {
            path: route + '/405', //链接出错（一般用不到）
            component: '@/pages/routes/error/405.tsx',
            type: 'system_error',
        },
        //代理模式下不可访问
        {
            path: route + '/406', //链接出错（一般用不到）
            component: '@/pages/routes/error/406.tsx',
            type: 'grant_auth_no_pass',
        },
        //dayu项目无权限页面
        {
            path: route + '/407', //链接出错（一般用不到）
            component: '@/pages/routes/error/407.tsx',
            type: 'system_error',
        },
        {
            path: route + '/408', //链接出错（一般用不到）
            component: '@/pages/routes/error/408.tsx',
            type: 'system_error',
        },
        //知识图谱项目无权限页面
        {
            path: route + '/411', //链接出错（一般用不到）
            component: '@/pages/routes/error/411.tsx',
            type: 'system_error',
        },
        //当前数组routes内路由丢失处理
        {
            component: '@/pages/routes/error/404.tsx',
        },

    ];
};

export default [
    //默认重定向到首页
    {
        path: '/',
        component: '@/pages/routes/index.tsx',
        exact: true,
        title: '首页'
        // redirect: '/dataWarehouse/dataLead',
    },
    { 
        path: '/users', 
        component: '@/pages/routes/user/index.tsx',
        title: '用户信息' 
    },
    { 
        path: '/foo',
        component: '@/pages/routes/foo/index.tsx',
        title: 'Foo' 
    },
    ...exceptionRoutes({route: 'error'})
];
