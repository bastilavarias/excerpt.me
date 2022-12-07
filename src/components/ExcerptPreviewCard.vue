<template>
  <q-card class="excerpt-preview" flat>
    <q-card-section>
      <div class="flex justify-between q-mb-lg">
        <div>
          <h6 class="text-h6 text-bold q-my-none flex items-center">
            Epictetus
          </h6>
          <p class="text-caption q-mb-none">Excerpt #{{ position }}</p>
        </div>
        <p class="text-caption q-mb-none text-italic">07/12/22</p>
      </div>
      <p class="text-body2 content-body text-italic">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        commodi consequatur doloremque eligendi ex fugiat id in ipsa molestias
        numquam pariatur, porro quam, quis quo reiciendis soluta temporibus
        veritatis vero, vitae voluptatem. Ad cum distinctio harum magni nam non
        praesentium quos sit tempora velit. Ea expedita minus odio qui quia quis
        ratione totam voluptatem. Alias amet consequuntur ducimus eligendi
        facilis molestiae nobis quasi totam vel veritatis. Corporis fugiat
        labore perferendis vitae? Accusantium alias assumenda cumque enim eos
        explicabo id illum molestias nemo nobis quibusdam repellendus
        repudiandae, voluptate. Alias animi aut deleniti ea enim fugit
        reprehenderit voluptas. Commodi, nihil officia. Ipsa.
      </p>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["position"]);
</script>

<style lang="scss" scoped>
@import "../css/quasar.variables";

.excerpt-preview {
  background-color: $secondary;
}
</style>
