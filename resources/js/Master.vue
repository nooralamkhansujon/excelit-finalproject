<template>
  <admin-master v-if="AdminOrFront" />
  <FrontMaster v-else />
</template>

<script>
import GetAdmin from "./admin/mixins/GetAdmin";
import FrontMaster from "./FrontendMaster.vue";
import AdminMaster from "./AdminMaster.vue";
export default {
  components: {
    FrontMaster,
    AdminMaster,
  },
  mixins: [GetAdmin],
  computed: {
    AdminOrFront() {
      if (this.$router.currentRoute.value?.meta.admin) {
        return true;
      } else {
        false;
      }
    },
  },
  mounted() {
    this.GetAdmin();
  },
};
</script>
