 
function onSubmit(){
    let name = document.querySelector("#name").value
    let temp = document.querySelector('input[name=type]:checked').value;
    let size = document.querySelector('input[name=size]:checked').value;
    let type = document.querySelector('input[name=drinks]:checked').value;

    let addons = document.querySelectorAll('input[name=addons]:checked')
    let add = []
    addons.forEach(function(element) {
        add.push(element.value)       
    });
    let directions = document.getElementsByName('message')[0].value;
    
    alert(`Hi ${name} thank you! for ordering. Please verify your order ${type}, ${size}, ${temp} Add-ons : ${add} special instructions : ${directions}. Thank you for ordering. Our baristas will be right on it. `)
}
