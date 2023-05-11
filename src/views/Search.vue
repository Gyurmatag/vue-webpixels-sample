<template>
  <div class="w-100">
    <label class="form-label text-xs" for="search">Search</label>
    <div class="input-group input-group-inline col-lg-6 col-sm-12 position-relative">
      <span class="input-group-text">
        <i class="bi bi-search"></i>
      </span>
      <input type="text" id="search" class="form-control pe-4" placeholder="iPhone" aria-label="Number" v-model="searchQuery" @input="updateAutocomplete" @keydown.up.prevent="up" @keydown.down.prevent="down" @keydown.enter.prevent="enter">
    </div>
    <div class="list-group list-group-flush bg-white w-100 border rounded" v-if="filteredItems.length > 0">
      <div class="list-group-item d-flex px-0 cursor-pointer" v-for="(item, i) in filteredItems" :key="item" :class="{ 'bg-gray-200 text-white': i === hoverIndex }" @mouseover="hoverIndex = i" @click="selectItem(item)">
        <div class="flex-fill px-5">
          <a href="#" class="d-block mb-1 text-gray-800">
            <span class="d-inline-block w-7"><i class="bi bi-phone"></i></span>{{ item }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const items = ['iPhone 11', 'Macbook Pro', 'iPhone SE', 'Google Pixel 3']
const filteredItems = ref([])
const hoverIndex = ref(-1)

const updateAutocomplete = () => {
  if (searchQuery.value === '') {
    filteredItems.value = []
  } else {
    filteredItems.value = items.filter(item => item.toLowerCase().includes(searchQuery.value.toLowerCase()))
    hoverIndex.value = -1
  }
}

const selectItem = item => {
  searchQuery.value = item
  filteredItems.value = []
}

const up = () => {
  if (hoverIndex.value > 0) {
    hoverIndex.value--
  }
}

const down = () => {
  if (hoverIndex.value < filteredItems.value.length - 1) {
    hoverIndex.value++
  }
}

const enter = () => {
  if (hoverIndex.value >= 0) {
    selectItem(filteredItems.value[hoverIndex.value])
  }
}
</script>
