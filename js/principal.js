var app = new Vue ({
    el: '#App',
    data: {
        nombre: '',
        promedio: '',
        lista: []
    },
    methods: {
        agregarnota: function(){
            if (this.nombre !== "" && this.promedio !== "") {
                let estado = this.promedio >= 7 ? " Aprobado" : "Reprobado"; 
                this.lista.push({nombre: this.nombre, promedio: this.promedio, estado: estado});
                this.nombre = '';
                this.promedio = '';
            } else {
                alert('El nombre y promedio son obligatorios');
            }
        }
    }
});

