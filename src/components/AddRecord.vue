<template>
  <Card class="record">
    <template #content>
      <TabView ref="expense">
        <TabPanel>
          <template #header>
            <i class="pi pi-minus-circle"></i>
            <span>Expense</span>
          </template>
          <form class="record__form">
            <RecordCategories class="record__form--categories" />
            <div class="record__form--amount">
              <InputNumber
                id="stacked"
                v-model="value17"
                showButtons
                mode="currency"
                currency="USD"
                incrementButtonClass="p-button-danger"
                decrementButtonClass="p-button-danger"
              />
              <Button
                class="p-button-outlined p-button-danger"
                icon="pi pi-minus"
              />
            </div>
          </form>
        </TabPanel>
        <TabPanel>
          <template #header>
            <i class="pi pi-plus-circle"></i>
            <span>Income</span>
          </template>
          <form class="record__form">
            <RecordCategories class="record__form--categories" />
            <div class="record__form--amount">
              <InputNumber
                id="stacked"
                v-model="value17"
                showButtons
                mode="currency"
                currency="USD"
                incrementButtonClass="p-button-success"
                decrementButtonClass="p-button-success"
              />
              <Button
                class="p-button-outlined p-button-success"
                icon="pi pi-plus"
              />
            </div>
          </form>
        </TabPanel>
      </TabView>
    </template>
  </Card>
</template>

<script>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import InputNumber from 'primevue/inputnumber';
import RecordCategories from '@/components/RecordCategories.vue';

export default {
  components: {
    TabView,
    TabPanel,
    InputNumber,
    RecordCategories,
  },
};
</script>

<style lang="scss" scoped>
.record {
  &__form {
    display: flex;
    justify-content: center;
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: center;
    }
    gap: 16px;
    &--categories {
      width: 200px;
    }
    &--amount {
      display: flex;
      justify-content: center;
      gap: 10px;
    }
  }
}
</style>
