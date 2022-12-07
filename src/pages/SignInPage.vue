<template>
  <q-page
    class="flex column justify-center q-px-lg q-py-md"
    style="height: 100%"
  >
    <div class="row">
      <div class="col-12 q-mb-md">
        <label for="" class="text-h5 q-mb-md">E-mail</label>
        <q-input
          color="transparent"
          autogrow
          width="full-width"
          class="content-body text-body1"
        />
      </div>

      <div class="col-12 q-mb-xl">
        <label for="" class="text-h5 q-mb-md">Password</label>
        <q-input
          color="transparent"
          autogrow
          width="full-width"
          type="password"
          class="content-body text-body1"
        />
      </div>

      <div class="col-12">
        <q-btn
          class="full-width"
          color="black"
          size="lg"
          rounded
          :to="{ name: 'Library' }"
          >Open My Library</q-btn
        >
      </div>
    </div>
  </q-page>
</template>
