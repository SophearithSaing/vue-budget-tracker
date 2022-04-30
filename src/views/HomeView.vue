<template>
  <div class="home">
    <RemainingBudget></RemainingBudget>
  </div>
</template>

<script>
// @ is an alias to /src
import RemainingBudget from '@/components/RemainingBudget.vue';

export default {
  name: 'HomeView',
  components: { RemainingBudget },
};
</script>

<style lang="scss" scoped>
.home {
  margin: 24px;
}
</style>
