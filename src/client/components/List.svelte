<script>
    export let data;
</script>

<ul>
    {#each data as row}
        <li> {row} </li>
    {/each}
</ul>
