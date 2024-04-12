<script setup>

  // eslint-disable-next-line no-unused-vars
  const faq = [
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      question: 'Why do we use it?',
      answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      question: 'Where does it come from?',
      answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    },
    // Add more FAQ items as needed
  ];
</script>
<template>
  <div class="bg-white ">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <ul role="list" class="mt-12 space-y-8">
        <li v-for="(question, index) in faq" :key="index">
          <div class="bg-gray-100 rounded-lg p-4">
            <h3 class="text-lg font-semibold text-gray-900">{{ question.question }}</h3>
            <p class="mt-2 text-gray-600">{{ question.answer }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


