<template>
  <Card class="remaining">
    <template #content>
      <h2 class="remaining__amount"><span>$75</span> / <span>$100</span></h2>
      <ProgressBar :value="75" />
    </template>
  </Card>
</template>

<script>
import ProgressBar from 'primevue/progressbar';

export default {
  components: {
    ProgressBar,
  },
};
</script>

<style lang="scss" scoped>
.remaining {
  margin-bottom: 24px;
  &__amount {
    margin-bottom: 16px;
  }
}
</style>
