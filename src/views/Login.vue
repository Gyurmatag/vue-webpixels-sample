<script setup>
import GoogleLogin from "@/components/GoogleLogin.vue";</script>

<template>
  <div class="bg-gray-50 p-10">
    <div class="row mb-3">
      <div class="col">
        <p class="text-xl text-center">Create your account</p>
      </div>
    </div>
    <div class="row mb-8">
      <div class="col">
        <p class="text-center">It's free and easy</p>
      </div>
    </div>
    <div class="row mb-6">
      <div class="col">
        <label class="text-xs" for="name">Your Name</label>
        <input id="name" class="form-control" placeholder="Enter your name" type="text">
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <button class="btn btn-primary w-full" type="button">
          Next
        </button>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <GoogleLogin/>
      </div>
    </div>
  </div>
</template>