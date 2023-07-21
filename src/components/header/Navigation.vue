<template>
  <Disclosure as="nav" class="bg-lightgreen-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl sm:px-2">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 sm:justify-start">
          <div class="flex items-center">
            <a href="/"><img class="block h-8 w-auto lg:block" src="/logo.png" alt="Où sortir avec mon bébé ?" /></a>
          </div>
          <div class="px-4">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-lightgreen-900 text-white' : 'text-lightgreen-300 hover:bg-lightgreen-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto">
          <button type="button" class="rounded-full bg-lightgreen-800 text-lightgreen-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-lightgreen-800">
            <a href="/about"><QuestionMarkCircleIcon class="h-6 w-6" aria-hidden="true" /></a>
          </button>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Proposer un lieu', href: '/add', current: false },
]
</script>
