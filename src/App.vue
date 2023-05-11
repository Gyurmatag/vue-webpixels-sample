<script setup>
import {useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();

const setActiveTab = (tabName) => {
  router.push({name: tabName});
}

const isActiveTab = (tabName) => {
  return route.name === tabName;
}
</script>

<template>
  <main class="vh-100 d-flex align-items-center justify-content-center">
    <div class="flex flex-column col-12 col-md-6 col-lg-4 mt-10 p-4">
      <ul class="nav nav-fill nav-tabs mb-4">
        <li class="nav-item">
          <a :class="{ active: isActiveTab('login') }" class="nav-link" href="#" @click.prevent="setActiveTab('login')">
            <i class="bi bi-key me-2"></i>Login
          </a>
        </li>
        <li class="nav-item">
          <a :class="{ active: isActiveTab('dropdown') }" class="nav-link" href="#"
             @click.prevent="setActiveTab('dropdown')">
            <i class="bi bi-search me-2"></i>Search
          </a>
        </li>
      </ul>
      <router-view/>
    </div>
  </main>
</template>
