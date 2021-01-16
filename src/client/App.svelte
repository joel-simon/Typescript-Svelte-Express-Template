<script lang='typescript'>
    import router from "page"
    import Index from './routes/Index.svelte'
    import About from './routes/About.svelte'
    let page
    router('/', () => page = Index)
    router('/about', () => page = About)
    router.start()
</script>
<svelte:component this={page} />