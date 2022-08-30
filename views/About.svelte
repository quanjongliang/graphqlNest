<!-- views/About.svelte -->
<script>
  import Layout from './Layout.svelte';
  export let message;
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<Layout>
  <h1>About</h1>
  <div>{message}
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet non architecto
    magni aut eveniet aperiam possimus debitis praesentium, distinctio magnam ex
    nulla illum unde aliquid vitae excepturi, maiores vel fugiat.
  </div> 
</Layout>
