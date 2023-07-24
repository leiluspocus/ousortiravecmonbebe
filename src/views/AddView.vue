<script setup>
</script>
<template>
  <form class="px-4 pb-4 content content-with-text">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h1 class="text-base font-semibold leading-7 text-gray-900 mt-3 dark:text-white">Proposer un endroit "bébé-friendly"</h1>
        <div class="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nom</label>
            <div class="mt-2">
              <input type="text" name="name" id="name" autocomplete="name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400">Nom et adresse du lieu que vous recommandez ?</label>
            <div class="mt-2">
              <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">Code postal</label>
            <div class="mt-2">
              <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Ville</label>
            <div class="mt-2">
              <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <div class="mt-10 space-y-10">
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Les plus "Bébé Friendly"</legend>
            <div class="mt-6 space-y-6">
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                </div>
                <div class="text-sm leading-6">
                  <label for="comments" class="font-medium text-gray-900 dark:text-gray-400">Table à langer</label>
                  <p class="text-gray-500">Y a-t-il de quoi changer les p'tits bouts ?</p>
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                </div>
                <div class="text-sm leading-6">
                  <label for="candidates" class="font-medium text-gray-900 dark:text-gray-400">Accès pousettes</label>
                  <p class="text-gray-500">Est-ce facile de se déplacer en poussette dans l'établissement ? </p>
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                </div>
                <div class="text-sm leading-6">
                  <label for="offers" class="font-medium text-gray-900 dark:text-gray-400">Staff bienveillant</label>
                  <p class="text-gray-500">Qu'ils braillent ou qu'ils fassent risette, est-ce que l'équipe est agréable avec les tous petits ?</p>
                </div>
              </div>
            </div>

            <div class="mt-8 col-span-full">
              <label for="feedback" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Votre opinion</label>
              <div class="mt-2">
                <textarea id="feedback" name="feedback" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"></textarea>
              </div>
              <p class="mt-3 text-sm leading-6 text-gray-600">Pourquoi recommandez vous ce lieu en quelques mots.</p>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="submit" class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Envoyer</button>
    </div>
  </form>
</template>

<style>
.addview {
  width: 600px;
  height: 600px;
}
</style>
