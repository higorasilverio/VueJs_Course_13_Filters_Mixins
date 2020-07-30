<template>
	<div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
        </ul>
        <input v-model="fruta" type="text" @keydown.enter="add">
    </div>
</template>

<script>
import frutasMixin from '@/frutasMixin'
export default {
	mixins: [ frutasMixin ],
}
</script>

<style>

input {
    font-size: 1.5rem;
    align-content: center;
}

</style>
