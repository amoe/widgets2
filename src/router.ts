import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Orthodox from './views/Orthodox.vue';
import RearrangementView from './views/RearrangementView.vue';

Vue.use(Router);

const IndexView = RearrangementView;

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: IndexView,
        },
        {
            path: '/orthodox',
            name: 'Orthodox',
            component: () => import('./views/Orthodox.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
        },
        {
            path: '/demo1',
            name: 'demo1',
            component: () => import('./views/Demo1.vue')
        },
        {
            path: '/ts2',
            name: 'ts2',
            component: () => import('./views/TS2View.vue')
        },
        {
            path: '/folding-taxon-selectors',
            name: 'folding-taxon-selectors',
            component: () => import('./views/FoldingTaxonSelectorsView.vue')
        },
        {
            path: '/rearrangement',
            name: 'rearrangement-demo',
            component: () => import('./views/RearrangementView.vue')
        }

    ],
});
