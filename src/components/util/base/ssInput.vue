<script setup lang="ts">
import { computed } from 'vue'

interface Prop {
  modelValue: string
  label: string
  onClear?: (value: any) => void
}

const prop = defineProps<Prop>()
const emit = defineEmits(['update:model-value'])

const model = computed({
  get() {
    return prop.modelValue;
  },
  set(newValue) {
    emit('update:model-value', newValue);
  },
})
</script>

<template>
  <q-input
    v-model="model"
    :label="label"
    clearable
    @clear="onClear"
    class="font"
  >
    <template v-slot:label>
      <p class="font q-mb-sm">{{ label }}</p>
    </template>
  </q-input>
</template>

<style scoped lang="scss">
.font {
  font-size: 1.1rem;
}
</style>