<template>
  <div class="home">
    <RemainingBudget />
    <AddRecord />
  </div>
</template>

<script>
// @ is an alias to /src
import RemainingBudget from '@/components/RemainingBudget.vue';
import AddRecord from '@/components/AddRecord.vue';

export default {
  name: 'HomeView',
  components: {
    RemainingBudget,
    AddRecord,
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: 24px;
}
</style>
