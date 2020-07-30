<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<hr>
		<p>{{ frase1 | trocar }}</p>
		<input v-model="frase1" type="text"/>
		<hr>
		<p>{{ frase2 | tamanho }}</p>
		<input v-model="frase2" type="text"/>
		<hr>
		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{ fraseComVirgulas }}</p>
		<input v-model="frase3" type="text"/>
		<p>{{ fraseComOsTamanhos }}</p>
		<input v-model="frase4	" type="text"/>
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import Frases from '@/frasesMixin'
export default {
	mixins: [Frases],
	filters: {
		trocar(valor){
			let arr = valor.split(" ");
			return arr.join(",")
		}
	},
	data() {
		return {
			frase1: '',
			frase2: '',
			frase3: '',
			frase4: '',
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}
</style>
