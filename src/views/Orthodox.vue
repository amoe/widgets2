<template>
  <div>
  <widget-view :taxonomies="taxonomies"></widget-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TreeModel from 'tree-model';
import WidgetView from '@/components/WidgetView.vue'; // @ is an alias to /src
import * as log from 'loglevel';
import {TaxonomyNodeModel} from '@/types';
import mc from '@/mutation-constants';

const PLACE_TAXONOMY_JSON = {
    "children": [
        {
            "children": [
                {
                    "content": "Clothes shop", 
                    "id": 63795, 
                    "label": "Taxon", 
                    "uri": "tag:solasistim.net,2018-12-28:occubrow/Clothes shop/1"
                }
            ], 
            "content": "Shop", 
            "id": 63793, 
            "label": "Taxon", 
            "uri": "tag:solasistim.net,2018-12-28:occubrow/Shop/1"
        }, 
        {
            "content": "Pub", 
            "id": 63794, 
            "label": "Taxon", 
            "uri": "tag:solasistim.net,2018-12-28:occubrow/Pub/1"
        }
    ], 
    "content": "Place", 
    "id": 63796, 
    "label": "Taxon", 
    "uri": "tag:solasistim.net,2018-12-28:occubrow/Place/1"
};


const OCCUPATION_TAXONOMY_JSON = {
    "children": [
        {
            "content": "Transport", 
            "id": 63792, 
            "label": "Taxon", 
            "uri": "tag:solasistim.net,2018-12-28:occubrow/Transport/1"
        }, 
        {
            "content": "Serve", 
            "id": 63788, 
            "label": "Taxon", 
            "uri": "tag:solasistim.net,2018-12-28:occubrow/Serve/1"
        }, 
        {
            "content": "Drive", 
            "id": 63790, 
            "label": "Taxon", 
            "uri": "tag:solasistim.net,2018-12-28:occubrow/Drive/1"
        }, 
        {
            "content": "Manage", 
            "id": 63791, 
            "label": "Taxon", 
            "uri": "tag:solasistim.net,2018-12-28:occubrow/Manage/1"
        }
    ], 
  "content": "Occupation", 
  "id": 63789, 
  "label": "Taxon", 
  "uri": "tag:solasistim.net,2018-12-28:occubrow/Occupation/1"
};

const config = {};
const t = new TreeModel(config)

export default Vue.extend({
    name: '',
    components: {WidgetView},
    data() {
        return {
            // we pass this raw data into the WidgetView component.
            // WidgetView itself has responsibility for deserializing it, 
            // inserting it to the store, etc.  We never deal with the store
            // ourselves.
            taxonomies: {
                'Occupation': OCCUPATION_TAXONOMY_JSON,
                'Place': PLACE_TAXONOMY_JSON
            }
        }
    },
    created() {
       this.$store.commit(mc.ADD_COMPOUND_WIDGET);
       this.$store.commit(mc.ADD_COMPOUND_WIDGET);
       this.$store.commit(mc.ADD_COMPOUND_WIDGET);
       this.$store.commit(mc.ADD_COMPOUND_WIDGET);
       this.$store.commit(mc.ADD_COMPOUND_WIDGET);
       this.$store.commit(mc.ADD_COMPOUND_WIDGET);
       this.$store.commit(mc.ADD_COMPOUND_WIDGET);
       this.$store.commit(mc.ADD_COMPOUND_WIDGET);
       this.$store.commit(mc.ADD_COMPOUND_WIDGET);
       this.$store.commit(mc.ADD_COMPOUND_WIDGET);
       this.$store.commit(mc.ADD_COMPOUND_WIDGET);
       this.$store.commit(mc.ADD_COMPOUND_WIDGET);
       this.$store.commit(mc.ADD_COMPOUND_WIDGET);
    },
    mounted() {
        log.debug("root is %o", this.taxonomies);
    }
});
</script>

<style lang="less">

</style>
