<template>
   <li class="mb-6 flex  p-3 border-gray-100 border rounded-md bg-gray-50" >
        <div class="flex items-center justify-center bg-light-blue-50 w-8 h-8 text-light-blue-500 rounded-full absolute sm:hidden">
            <i class="fas fa-question"></i>
        </div>
        <div class="pl-12 pr-4 sm:pl-4 sm:pr-2">
            <div class="text-gray-700 font-semibold cursor-pointer sm:leading-tight" @click="toggle()">{{question}}</div>
            <p class="text-gray-600 font-light overflow-hidden " :class="{'h-0 mt-0': !isOpen, 'h-auto mt-4': isOpen}">
                {{answer}}
            </p>
        </div>
        <div class="ml-auto p-1 cursor-pointer rounded hover:text-light-blue-200"  @click="toggle()">
            <i v-if="!isOpen" class="fas fa-angle-down"></i>
            <i v-else class="fas fa-angle-up"></i>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'faq-box',
        props: {
            answer: String,
            question: String
        },
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            toggle() {
                this.isOpen = !this.isOpen;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>