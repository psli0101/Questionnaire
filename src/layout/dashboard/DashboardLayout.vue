<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <!-- <sidebar-link to="/dashboard" name="Dashboard" icon="ti-user"/> -->
        <sidebar-link to="/table-list" name="Table List" icon="ti-view-list-alt"/>
        <!-- <sidebar-link to="/user" name="User Setting" icon="ti-panel"/> -->
        <sidebar-link to="/questionnaire" name="Questionnaire Setting" icon="ti-panel"/>
        <!-- <sidebar-link to="/icons" name="Icon" icon="ti-user"/> -->
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content @click.native="toggleSidebar"></dashboard-content>
      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
