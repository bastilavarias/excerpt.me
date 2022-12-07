<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="header">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bolder text-black" shrink>
          {{ pageTitle }}
        </q-toolbar-title>
        <q-space></q-space>
        <q-btn
          class="q-pr-none"
          color="secondary"
          rounded
          flat
          :to="{ name: 'Search' }"
        >
          <q-icon name="travel_explore" color="black"></q-icon>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer" elevated>
      <q-toolbar class="flex justify-between">
        <q-btn flat size="lg" :to="{ name: 'Stoa' }">
          <q-icon name="public" />
        </q-btn>
        <q-btn flat size="lg" :to="{ name: 'Library' }">
          <q-icon name="library_books" />
        </q-btn>
        <q-btn flat size="lg" :to="{ name: 'Account' }">
          <q-icon name="account_circle" />
        </q-btn>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const pageTitle = computed(() => route.name);
</script>

<style lang="scss" scoped>
@import "../css/quasar.variables";

.header {
  background-color: $secondary;
}

.footer {
  background-color: black;
}
</style>
