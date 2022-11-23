<template>
  <div>
    <div no-gutters class="p-3 gap-6 lg:p-10 flex flex-row" >
        <div class="basis-64">
          <FeedbackSideNav/>
        </div>
        <div class="basis-full">
          <FeedbackDashboard/>
        </div>
    </div>
  </div>
</template>

<script>
import FeedbackSideNav from "@/components/FeedbackSideNav";
import FeedbackDashboard from "@/components/FeedbackDashboard";
export default {
  name: "FeedbackDashboardView",
  components: {FeedbackDashboard, FeedbackSideNav}
}
</script>

<style scoped>

</style>