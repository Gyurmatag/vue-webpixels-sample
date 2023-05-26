<template>
  <div class="bg-gray-50 p-10">
    <div class="row mb-3">
      <div class="col">
        <p class="text-xl text-center">👋 Hi XY nice to meet you!</p>
      </div>
    </div>
    <div class="row mb-8">
      <div class="col">
        <p class="text-center">Thank you that you choose our product</p>
      </div>
    </div>
    <div class="row mb-6">
      <div class="col">
        <label class="text-xs" for="email">Email</label>
        <input
            id="email"
            class="form-control"
            :class="{ 'border-red-600': v$.email.$error}"
            placeholder="Type your email"
            type="email"
            @input="v$.email.$touch"
            v-model="state.email"
            maxlength="255"
        >
        <div v-for="error in v$.email.$errors" :key="error.$uid">
          <div class="text-red-600 text-sm">{{ error.$message }}</div>
        </div>
      </div>
    </div>
    <div class="row mb-6">
      <div class="col">
        <label class="text-xs" for="password">Password</label>
        <input
            id="password"
            class="form-control"
            :class="{ 'border-red-600': v$.password.$error}"
            placeholder="Type your password"
            type="password"
            @input="v$.password.$touch"
            v-model="state.password"
            maxlength="255"
        >
        <div class="input-errors" v-for="error in v$.password.$errors" :key="error.$uid">
          <div class="text-red-600 text-sm">{{ error.$message }}</div>
        </div>
      </div>
    </div>
    <div class="row mb-6">
      <div class="col" :class="{ error: v$.passwordConfirm.$error }">
        <label class="text-xs" for="passwordConfirm">Password again</label>
        <input
            id="passwordConfirm"
            class="form-control"
            :class="{ 'border-red-600': v$.passwordConfirm.$error}"
            placeholder="Make sure that the password matching"
            type="password"
            @input="v$.passwordConfirm.$touch"
            v-model="state.passwordConfirm"
            maxlength="255"
        >
        <div v-for="error in v$.passwordConfirm.$errors" :key="error.$uid">
          <div class="text-red-600 text-sm">{{ error.$message }}</div>
        </div>
      </div>
    </div>
    <div class="row mb-6">
      <div class="col">
        <div class="d-flex align-items-center">
          <i class="bi bi-info-circle text-xl me-3"></i>
          <p class="font-bold text-xs">By creating your account means you agree to the <a href="https://www.shiwaforce.com/en/general-contractual-conditions-octant-search">Terms and Conditions</a>, and our <a href="https://www.shiwaforce.com/en/privacy-policy-octant-search">Privacy Policy</a></p>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <button class="btn btn-secondary w-full" type="button">
          Back
        </button>
      </div>
      <div class="col">
        <button class="btn btn-primary w-full" type="button" :disabled="v$.$invalid">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, reactive} from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, sameAs, helpers } from '@vuelidate/validators'

const state = reactive({
  email: '',
  password: '',
  passwordConfirm: '',
})

const passwordRef = computed(() => state.password);

const passwordStrong = helpers.withMessage(
    'Password must contain: number, lowercase, uppercase, special character, and must min. 8 characters',
    value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
)

const rules = {
  email: { required, email },
  password: { required, passwordStrong },
  passwordConfirm: { required, sameAs: sameAs(passwordRef) },
}

const v$ = useVuelidate(rules, state)
</script>

