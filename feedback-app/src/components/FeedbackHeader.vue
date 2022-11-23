<template>
  <div class="card py-6">
    <div class="flex justify-between items-center px-5">
      <div>
        <div class="flex flex-col md:py-0 py-4">
          <input id="email1" class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border dark:focus:border-gray-700 font-normal w-72 h-11 flex items-center pl-3 text-base border-gray-300 rounded-xl border" placeholder="search" />
        </div>
      </div>
      <div class="flex items-center">
        <div class="h-8 w-8 mb-4 lg:mb-0 border-green-700	border-dashed border flex justify-center  rounded-full py-1.5">
          <span class="text-xs text-green-700 font-bold text-center" style="font-family: 'UI Sans Serif'; ">B</span>
        </div>
        <div class="flex ml-2 items-center">
          <span>blositive.nl</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="6 9 12 15 18 9" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        <small style="border:1px solid #e5e7eb;height:20px;"></small>
        <svg width="45" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M3 7L12 13L21 7" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <small style="border:1px solid #e5e7eb;height:20px;"></small>
        <div class="flex ml-1 items-center">
          <div class="h-6 w-6 mb-4 lg:mb-0 mr-0.5">
            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_0.png" alt="" class="h-full w-full rounded-full overflow-hidden shadow" />
          </div>
          <span>Customer</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="6 9 12 15 18 9" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

      </div>

    </div>
    <div class="my-4 w-full">
      <hr class=" w-full" />
    </div>
    <div class="px-5 flex justify-between">
      <div class="flex items-center">
        <h5>Feedback Insights</h5>
        <span class="md:ml-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
      <div>
        <div class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border dark:focus:border-gray-700 font-normal w-60 h-11 flex items-center text-base border-gray-300 rounded-xl border">
          <Datepicker readonly v-model="date" range :enableTimePicker="false">
            <template #clear-icon="{ clear }">

            </template>
            <template #input-icon>
            </template>
          </Datepicker>
          <small style="border:1px solid #e5e7eb;" class="h-full"></small>

          <Datepicker v-model="date" range multiCalendars :enableTimePicker="false">
            <template #trigger>
              <vue-feather size="30" type="menu"/>
            </template>
            <template #right-sidebar>
              <div>Custom content</div>
            </template>

          </Datepicker>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
const date = ref();
onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
})
</script>

<style scoped lang="scss">
.card{
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
}
h5{
  font: normal normal 500 24px/30px Formular;
  letter-spacing: 0;
  color: #030234
}
</style>