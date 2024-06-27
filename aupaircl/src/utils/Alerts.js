import Swal from "sweetalert2";
const showMessageSuccess= async(message, status)=>{
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: status,
      title: message
    });
}
const loading=async()=>{
  		Swal.fire({
			title: "Cargando...",
			text: 'Por favor espere...',
			allowOutsideClick: false,
			showConfirmButton: false,
			willOpen: () => {
				Swal.showLoading();
			},
		});
}
export default{
    showMessageSuccess,loading
}