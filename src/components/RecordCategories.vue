<template>
  <TreeSelect
    v-model="selectedNode"
    :options="nodes"
    placeholder="Select Item"
  />
</template>

<script>
import TreeSelect from 'primevue/treeselect';

export default {
  components: {
    TreeSelect,
  },
  data() {
    return {
      nodes: null,
    };
  },
  methods: {
    getTreeNodes() {
      return fetch('data/categories.json')
        .then((res) => res.json())
        .then((data) => data.categories);
    },
  },
  mounted() {
    this.getTreeNodes().then((data) => {
      this.nodes = data;
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
