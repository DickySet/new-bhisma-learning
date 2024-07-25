<!-- src/components/QuillEditorComponent.vue -->
<template>
    <quill-editor v-model="localContent" :options="editorOptions" />
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  
  export default {
    name: 'QuillEditorComponent',
    props: {
      modelValue: {
        type: String,
        required: true,
      },
    },
    setup(props, { emit }) {
      const localContent = ref(props.modelValue);
  
      const editorOptions = {
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ['clean'],
          ],
        },
        placeholder: 'Compose an epic...',
        theme: 'snow',
      };
  
      watch(
        () => props.modelValue,
        (newValue) => {
          localContent.value = newValue;
        }
      );
  
      watch(localContent, (newValue) => {
        emit('update:modelValue', newValue);
      });
  
      return {
        localContent,
        editorOptions,
      };
    },
  };
  </script>
  
  <style scoped>
  .ql-container {
    height: 200px;
  }
  </style>
  