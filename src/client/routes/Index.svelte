<script lang='typescript'>
    import axios from 'axios'
    import { onMount } from 'svelte'
    import { message } from '../../common/shared'
    import List from '../components/List.svelte'
    let data = []
    console.log({message});
	onMount(async () => {
        const resp = await axios.get('http://localhost:1000/api/v1/data')
        data = resp.data.data  
        console.log(data);
	})
</script>
  
<style>
	:global(body) {
	  font-family: Arial, Helvetica, sans-serif;
	}
</style>
  
<div class="App">
    <h1>Index</h1>
    <List data={data} />
    <a href='/about'> About </a>
</div>
