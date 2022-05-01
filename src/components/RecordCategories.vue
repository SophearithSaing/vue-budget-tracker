<template>
  <TreeSelect
    v-model="selectedNode"
    :options="type === 'expense' ? expenseCategories : incomeCategories"
    placeholder="Select Item"
  />
</template>

<script>
import TreeSelect from 'primevue/treeselect';

export default {
  components: {
    TreeSelect,
  },
  props: ['type'],
  data() {
    return {
      expenseCategories: null,
      incomeCategories: null,
    };
  },
  methods: {
    getExpenseCategories() {
      return fetch('data/expenseCategories.json')
        .then((res) => res.json())
        .then((data) => data.categories);
    },
    getIncomeCategories() {
      return fetch('data/incomeCategories.json')
        .then((res) => res.json())
        .then((data) => data.categories);
    },
  },
  mounted() {
    this.getExpenseCategories().then((data) => {
      this.expenseCategories = data;
    });
    this.getIncomeCategories().then((data) => {
      this.incomeCategories = data;
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
