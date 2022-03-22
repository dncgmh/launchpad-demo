<template>
  <div class="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
    <div
      v-for="project in projects"
      :key="project.id"
      class="project group relative bg-slate-800 p-5 cursor-pointer"
      @click="() => goToProject(project.slug)"
    >
      <div class="w-full rounded-md overflow-hidden group-hover:opacity-75 lg:h-44">
        <img
          :src="project.media.thumbnail"
          :alt="project.imageAlt"
          class="w-full object-center object-cover md:w-full md:h-full"
        />
      </div>
      <div class="mt-4 flex justify-between">
        <div>
          <h3 class="">
            <a :href="project.href">
              <span aria-hidden="true" class="absolute inset-0 font-bold text-xl" />
              {{ project.name }}
            </a>
          </h3>
          <!-- <p class="mt-1 text-sm">{{ project.name }}</p> -->
        </div>
        <p class="text-xl font-medium">${{ project.totalRaise.toLocaleString() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const router = useRouter();
    const goToProject = (slug) => {
      console.log('slug :>> ', slug);
      router.push('/project/' + slug);
      router.push({ name: 'Project', params: { id: slug } });
    };
    return { goToProject };
  }
};
</script>
<style lang="postcss" scoped>
.project {
  @apply rounded-xl
  mt-5 !important;
}
</style>
