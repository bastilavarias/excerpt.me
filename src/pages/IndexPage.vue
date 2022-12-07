<template>
  <q-page
    class="flex column justify-center q-px-lg q-py-md"
    style="height: 100%"
  >
    <div class="row">
      <div class="col-12 q-mb-lg flex justify-center">
        <q-avatar square size="20rem">
          <img src="../assets/images/epictetus/epictetus-poster.png" />
        </q-avatar>
      </div>

      <div class="col-12 q-mb-md">
        <q-btn
          class="full-width"
          color="black"
          unelevated
          size="lg"
          rounded
          :to="{ name: 'Sign Up' }"
          >Sign In</q-btn
        >
      </div>

      <div class="col-12 q-mb-xl">
        <q-btn
          class="full-width"
          outline
          size="lg"
          rounded
          :to="{ name: 'Sign Up' }"
          >Create an Account</q-btn
        >
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
