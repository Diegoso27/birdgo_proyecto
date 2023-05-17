
$(function(){
    $("#formaRegistro").validate({
        rules:{
            txtCorreo:{
                required: true,
                email: true
            },
            txtPassword:{
                required: true,
                minlength: 8              
                
            },
            txtPassword2:{  
                required: true,
                minlength: 8,
                equalTo: "#txtPassword"
            }   
        },
        messages:{
            txtCorreo:{
                required:"Este campo es obligatorio",
                email: "El correo ingresado no es valido"
            },
            txtPassword:{
                required:"Este campo es obligatorio",
                minlength:"Debe contener al menos 8 caracteres"
            },
            txtPassword2:{
                required:"Este campo es obligatorio",
                minlength:"Debe contener al menos 8 caracteres",
                equalTo: "Las contraseñas no coinciden" 
            }
        }
    })
    $("#form-contacto").validate({
        rules:{ 
            txtCorreo:{
                required: true,
                email: true
            },
        },
        messages:{
            txtCorreo:{
                required:"Este campo es obligatorio",
                email: "El correo ingresado no es valido"
            }
        }    

    });
})

mostrarHora();
function mostrarHora(){
myDate = new Date();
hours = myDate.getHours();
minutes = myDate.getMinutes();
seconds = myDate.getSeconds();
if (hours < 10) hours = 0 + hours;

if (minutes < 10) minutes = "0" + minutes;

if (seconds < 10) seconds = "0" + seconds;

$("#horaActual").text(hours+ ":" +minutes+ ":" +seconds);
setTimeout("showTime()", 1000);
}