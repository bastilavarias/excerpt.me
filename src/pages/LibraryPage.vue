<template>
  <q-page-container style="padding-top: 0; padding-bottom: 0">
    <q-page padding>
      <div class="row">
        <div class="col-12 flex justify-between content-center q-mt-sm q-mb-md">
          <div class="flex items-center">
            <q-icon name="public" class="q-mr-xs"></q-icon>
            <span class="text-weight-bold">Public</span>
          </div>
          <q-icon name="settings" size="xs" color="black"></q-icon>
        </div>
        <div class="col-12 q-mb-md" v-for="n in 15" :key="n">
          <ExcerptPreviewCard :position="n" />
        </div>
      </div>

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="history_edu" color="black" :to="{ name: 'Writer' }" />
      </q-page-sticky>
    </q-page>
  </q-page-container>
</template>
<script>
import ExcerptPreviewCard from "components/ExcerptPreviewCard.vue";

export default {
  components: { ExcerptPreviewCard },
};
</script>
