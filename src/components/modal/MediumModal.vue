<template>
  <div>
    <button
      class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
      type="button"
      @click="toggleModal()"
    >
      Open regular modal
    </button>

    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
    >
      <div class="relative w-auto max-w-3xl mx-auto my-6">
        <!--content-->
        <div
          class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none"
        >
          <!--header-->
          <div
            class="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200"
          >
            <h3 class="text-3xl font-semibold">
              Modal Title
            </h3>

            <button
              class="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
              @click="toggleModal()"
            >
              <span
                class="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none"
              >
                ×
              </span>
            </button>
          </div>

          <!--body-->
          <div class="relative flex-auto p-6">
            <p class="my-4 text-lg leading-relaxed text-blueGray-500">
              I always felt like I could do anything. That’s the main thing
              people are controlled by! Thoughts- their perception of
              themselves! They're slowed down by their perception of themselves.
              If you're taught you can’t do anything, you won’t do anything. I
              was taught I could do everything.
            </p>
          </div>

          <!--footer-->
          <div
            class="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200"
          >
            <button
              class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
              type="button"
              @click="toggleModal()"
            >
              Close
            </button>

            <button
              class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-green-500 rounded shadow outline-none active:bg-green-600 hover:shadow-lg focus:outline-none"
              type="button"
              @click="toggleModal()"
            >
              Save Changess
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 z-40 bg-black opacity-25"></div>
  </div>
</template>

<script>
export default {
  name: "MediumModal",
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
};
</script>
