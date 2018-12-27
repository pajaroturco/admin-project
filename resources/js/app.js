
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.$ = window.jQuery = require('jquery');
window.Vue = require('vue');
window.swal = require('sweetalert2');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('categoria-component', require('./components/CategoriaComponent.vue'));
Vue.component('articulo-component', require('./components/ArticuloComponent.vue'));
Vue.component('cliente-component', require('./components/ClienteComponent.vue'));
Vue.component('proveedor-component', require('./components/ProveedorComponent.vue'));
Vue.component('usuario-component', require('./components/UsuarioComponent.vue'));
Vue.component('rol-component', require('./components/RolComponent.vue'));
Vue.component('ingreso-component', require('./components/IngresoComponent.vue'));
Vue.component('venta-component', require('./components/VentaComponent.vue'));
Vue.component('dashboard-component', require('./components/DashboardComponent.vue'));
Vue.component('consulta-ingreso-component', require('./components/ConsultaIngresoComponent.vue'));
Vue.component('consulta-venta-component', require('./components/ConsultaVentaComponent.vue'));
Vue.component('notificacion-component', require('./components/NotificacionComponent.vue'));


const app = new Vue({
    el: '#app',
    data: {
        menu: 0,
        notificaciones: []
    },
    created(){
        let me = this;
        axios.post('notificacion/get').then(function(response){
            me.notificaciones = response.data;
            var object = {};
            me.notificaciones.forEach( function(valor, indice, array) {
                object = JSON.parse(valor.data);
            });
        }).catch(function(error){
           console.log(error);
        });

        var userId = $('meta[name="userId"]').attr('content');

        Echo.private('App.User.'+userId).notification((notification)=>{
            me.notificaciones.unshift(notification);
        });

    }
});
