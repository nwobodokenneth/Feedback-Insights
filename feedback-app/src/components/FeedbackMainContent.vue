<template>
  <div>
    <div class="mt-5 card">
      <div class="flex px-5 py-2">
        <div v-for="item in topHeading">
          <span class="mr-16 head__tag">{{item}}</span>
        </div>
      </div>
      <div class="my-4 w-full">

        <hr class=" w-full" />
      </div>
      <div class="flex justify-between">
        <div class="px-5">
          <h3 class="tit">Show Previous Period:</h3>
          <div class="flex items-center bg-transparent rounded-lg">
            <button style="font-size: 10px" class="border focus:border-none rounded-l-full py-1 px-8 focus:bg-blue-500 focus:outline-none text-gray-500 ease-in duration-150 focus:text-white" ref="editButton">Yes</button>
            <button style="font-size: 10px" class="border focus:border-none rounded-r-full py-1 px-8 focus:bg-blue-500 focus:outline-none text-gray-500 ease-in duration-150 text-xs focus:text-white">No</button>
          </div>
        </div>
        <div class="px-5">
          <h3 class="tit">Select variable:</h3>
          <div class="flex items-center bg-transparent rounded-lg">
            <button style="font-size: 10px" class="border focus:border-none rounded-l-full py-1 px-8 focus:bg-blue-500 focus:outline-none text-gray-500 ease-in duration-150 focus:text-white">% Conversion Rate</button>
            <button style="font-size: 10px" class="border focus:border-none py-1 px-8 focus:bg-blue-500 focus:outline-none text-gray-500 ease-in duration-150 focus:text-white"># Invites Sent</button>
            <button style="font-size: 10px" class="border focus:border-none py-1 px-8 focus:bg-blue-500 focus:outline-none text-gray-500 ease-in duration-150 focus:text-white"># of Feedbacks</button>
            <button style="font-size: 10px" class="border focus:border-none rounded-r-full py-1 px-8 focus:bg-blue-500 focus:outline-none text-gray-500 ease-in duration-150 focus:text-white" ref="preview">Pre-Review Delays</button>
          </div>
        </div>
        <div class="px-5">
          <h3 class="tit">Show timeline:</h3>
          <div class="flex items-center bg-transparent rounded-lg">
            <button style="font-size: 10px" class="border focus:border-none rounded-l-full py-1 px-8 text-gray-500 ease-in duration-150">Days</button>
            <button style="font-size: 10px" class="border focus:border-none py-1 px-8  focus:outline-none text-gray-500 ease-in duration-150" >Weeks</button>
            <button style="font-size: 10px" class="border focus:border-none py-1 px-8 focus:bg-blue-500 focus:outline-none text-gray-500 ease-in duration-150 focus:text-white" >Month</button>
            <button style="font-size: 10px" class="border focus:border-none rounded-r-full py-1 px-8 focus:bg-blue-500 focus:outline-none text-gray-500 ease-in duration-150 focus:text-white" ref="years">Years</button>

          </div>
        </div>
      </div>
      <index/>
    </div>
    <div class="flex justify-between">
      <div v-for="n in 3" :key="n">
        <div class="card mt-5 w-96 py-3">
          <h4 class="px-6 w-48 num mb-2">{{bottomHeading.title}}</h4>
          <div class="px-6 flex justify-between">
            <h4>{{bottomHeading.year}}</h4>
            <div class="flex items-center">
              <h4 class="mr-2">{{bottomHeading.number}}</h4>
              <span style="font-size: 12px">reviews</span>
            </div>
          </div>
          <div class="my-4 w-full">
            <hr class=" w-full" />
          </div>
          <div class="px-6 flex justify-between">
            <h4>{{bottomHeading.year}}</h4>
            <div class="flex items-center">
              <h4 class="mr-2">{{bottomHeading.number}}</h4>
              <span style="font-size: 12px">reviews</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import Index from "@/components/LineChart";
const editButton = ref(null)
const preview = ref(null)
const years = ref(null)




onMounted(()=> {
  editButton.value.focus()


})
const topHeading = ref(['Key Stats', 'Products Review', 'Company Reviews', 'On-hold Reviews'])
const bottomHeading = ref({
  title: 'Number of collected feedback',
  year: '2020',
  number: '2.753'
})

</script>

<style scoped>
.card{
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
}
.head__tag{
  font: normal normal 550 14px/20px Formular !important;
  letter-spacing: 0;
  color: #050038;
  opacity: 1;
}
.tit {
  letter-spacing: 0;
  opacity: 1;
  font: normal normal normal 11px/15px Open Sans;
}
.num {
  letter-spacing: 0;
  color: #050038;
  opacity: 1;
  font: normal normal 700 14px/19px Open Sans;
}
</style>