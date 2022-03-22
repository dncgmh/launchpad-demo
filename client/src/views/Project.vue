<template>
  <div class="bg-secondary text-white rounded-md">
    <div>
      <!-- Image gallery -->
      <div class="lg:mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-1 lg:h-96 lg:gap-x-8">
        <div class="hidden aspect-w-full aspect-h-4 rounded-lg overflow-hidden lg:block">
          <img :src="project?.media?.background" class="w-full h-full object-center object-cover" />
        </div>
      </div>

      <!-- Product info -->
      <div
        class="max-w-2xl mx-auto lg:pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {{ project.name }}
          </h1>
        </div>

        <!-- Options -->
        <div class="flex-col mt-4 lg:mt-0 lg:row-span-3">
          <div class="flex">
            <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
              <img :src="project?.media?.logo" class="w-full h-full object-center object-cover" />
            </div>
            <div class="flex-1 text-right">
              <font-awesome-icon :icon="['fab', 'twitter']" class="mr-2" size="lg" />
              <font-awesome-icon :icon="['fab', 'telegram']" class="mr-2" size="lg" />
              <font-awesome-icon :icon="['fas', 'link']" class="mr-2" size="lg" />
              <font-awesome-icon :icon="['fas', 'newspaper']" class="mr-2" size="lg" />
              <div class="text-center mt-2">
                Total Raise:
                <p class="text-3xl font-bold">
                  {{ project.totalRaise }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex-col mt-3">
            <div class="flex justify-between">
              <span class="">Status</span>
              <span class="font-bold">END</span>
            </div>
            <div class="mt-2 flex justify-between">
              <span class="">Sale Type</span>
              <span class="font-bold">{{ project.saleType }}</span>
            </div>
            <div class="mt-2 flex justify-between">
              <span class="">Token</span>
              <span class="font-bold">{{ project.token?.symbol }}</span>
            </div>
            <div class="mt-2 flex justify-between">
              <span class="">Token Price</span>
              <span class="font-bold">{{ project.token?.price }}</span>
            </div>
            <div class="mt-2 flex justify-between">
              <span class="">Fee</span>
              <span class="font-bold">{{ project.token?.fee }}</span>
            </div>
            <div class="mt-2 flex justify-between">
              <span class="">Vesting</span>
              <span class="font-bold text-right">{{ project.token?.vesting }}</span>
            </div>
          </div>
        </div>

        <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base" v-html="project.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { StarIcon } from '@heroicons/vue/solid';
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';
import { getProject } from '../provider/firebase';
import { useRouter, useRoute } from 'vue-router';
import { defineComponent, ref, computed } from 'vue';
import Loading from '@/components/Loading.vue';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' }
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.'
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.'
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.'
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.'
    }
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-slate-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-slate-900', selectedClass: 'ring-gray-900' }
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true }
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton'
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.'
};
const reviews = { href: '#', average: 4, totalCount: 117 };

export default defineComponent({
  name: 'Project',
  components: {
    Loading,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    StarIcon
  },
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const { project } = getProject(id);

    return {
      project
    };
  }
});
</script>
