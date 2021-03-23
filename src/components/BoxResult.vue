<template>
  <div class="box">
    <p class="title is-size-4">
      Result
    </p>
    <p class="subtitle mt-3 is-size-6">
      {{ result }}
    </p>

    <p class="title is-size-4 mt-5">
      Equation
    </p>
    <p class="subtitle mt-3 is-size-6">
      {{ equation }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'BoxResult',

  props: {
    result: Number,
    equation: String,
  },
}
</script>