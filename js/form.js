let validar = new Vue ({
    el: '#form',
    data: {
        errors: [],
        name: null,
        email: null,
        msg: null,
        submitted: false,
        expression: /\w+@\w+\.+[a-z]/
    },
    computed: {
        hasErrors: function(){
            return !!this.errors.length;
        }
    },
    methods: {
        checkForm: function(e) {
            this.errors = [];
            this.submitted = true;

            if (this.name && this.email && this.expression.test(this.email)){
                 return true;                
            }
            
            if (!this.name) this.errors.push('Nombre requerido');
            if (!this.email) this.errors.push('Email requerido');
            if (!this.msg) this.errors.push('Mensaje requerido');
            if (!this.expresion.test(this.email)) this.errors.push('Formato de email incorrecto');

            if (!this.errors.length) {
                return true;
            }
        },
        submitForm(){
            this.name = '',
            this.email = '',
            this.msg = ''  
        }
        
    }  
});
