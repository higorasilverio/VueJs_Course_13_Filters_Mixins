export default {
	computed: {
		fraseComVirgulas() {
			return this.frase3.replace(/\s/g, ',')
		},
		fraseComOsTamanhos(){
			return this.frase4.split(' ').map(p => `${p} (${p.length})`).join(' ')
		}
	}
}