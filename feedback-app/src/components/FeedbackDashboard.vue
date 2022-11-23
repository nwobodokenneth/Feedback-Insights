<template>
  <div>
    <FeedbackHeader/>
    <FeedbackMainContent/>
  </div>
</template>

<script>
import FeedbackHeader from "@/components/FeedbackHeader";
import FeedbackMainContent from "@/components/FeedbackMainContent";
export default {
  name: "FeedbackDashboard",
  components: {FeedbackMainContent, FeedbackHeader}
}
</script>

<style scoped>

</style>