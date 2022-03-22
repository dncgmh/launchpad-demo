<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-slate-700">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider">
                  Total Raise
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="bg-slate-800 divide-y divide-gray-200 overflow-y-scroll">
              <tr
                v-for="project in projects"
                :key="project.email"
                class="cursor-pointer"
                @click="() => goToProject(project.slug)"
              >
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" :src="project.media.logo" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-slate-100">
                        {{ project.name }}
                      </div>
                      <div class="text-sm text-slate-100">
                        {{ project.saleType }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 truncate max-w-lg">
                  <div class="text-sm text-slate-100">
                    {{ project.shortDescription }}
                  </div>
                  <div class="text-sm text-slate-100">
                    {{ project.department }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-100">
                  {{ project.totalRaise }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-slate-100">
                    {{ new Date(project.schedule.participationOpenDate).toLocaleString() }}
                  </div>
                  <div class="text-sm text-slate-100">
                    {{ new Date(project.schedule.participationCloseDate).toLocaleString() }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                  >
                    Active
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-100">
                  {{ project.role }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
export default {
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const router = useRouter();
    console.log(`===> ~ setup ~ router`, router);
    const goToProject = (slug) => {
      console.log('slug :>> ', slug);
      router.push('/project/' + slug);
      router.push({ name: 'Project', params: { id: slug } });
    };

    const toNow = (day) => dayjs(day).toNow();
    return { goToProject, toNow };
  }
};
</script>
