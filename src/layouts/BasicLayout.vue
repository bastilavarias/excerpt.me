<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="q-pt-lg">
      <q-toolbar>
        <q-space></q-space>
        <q-toolbar-title shrink>
          <router-link
            :to="{ name: 'Home' }"
            style="text-decoration: none"
          >
            <q-avatar square>
              <img
                src="../assets/images/epictetus/epictetus-logo-small.jpg"
                alt=""
              />
            </q-avatar>
            <span
              class="text-weight-bolder text-black"
              style="text-decoration: none"
            >
              Excerpt.Me
            </span>
          </router-link>
        </q-toolbar-title>
        <q-space></q-space>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>
