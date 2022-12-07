<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <q-btn
          unelevated
          class="q-pl-none flex items-center inline"
          :to="{ name: 'Library' }"
        >
          <q-icon name="keyboard_backspace" size="xs"></q-icon>
          <span class="text-capitalize q-ml-sm">Go Back...</span>
        </q-btn>
      </div>
      <div class="col-12 q-px-lg q-py-md q-mb-xl">
        <div class="row">
          <div class="col-12 q-mb-xl">
            <h5 for="" class="text-h5 q-my-none">Today's Excerpt</h5>
            <p for="" class="text-subtitle1">07/12/22</p>
            <q-input
              color="transparent"
              autogrow
              width="full-width"
              type="textarea"
              class="content-body text-body1"
              rows="200"
            />
          </div>
          <div class="col-12">
            <q-btn class="full-width" color="black" size="lg" rounded
              >Share Wisdom</q-btn
            >
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
